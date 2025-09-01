const secretKey = process.env.STRIPE_SECRET_KEY;
let stripe = null;
if (secretKey) {
  stripe = require('stripe')(secretKey);
}

// In-Memory Cache (bleibt über Funktionsaufrufe meist erhalten)
let cached = { data: null, ts: 0 };
const CACHE_TTL_MS = 1000 * 60 * 5; // 5 Minuten

function toSlug(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

exports.handler = async (event) => {
  if (!secretKey || !stripe) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'STRIPE_SECRET_KEY fehlt (Server).' }),
    };
  }

  try {
    const { priceId, productId } = event.queryStringParameters || {};
    let items = cached.data;
    const isFresh = Date.now() - cached.ts < CACHE_TTL_MS;
    if (!items || !isFresh) {
      const prices = await stripe.prices.list({
        active: true,
        limit: 100,
        expand: ['data.product'],
      });
      items = prices.data
        .filter((p) => p.active && p.product && p.product.active)
        .map((p) => {
          const prod = p.product;
          const image = (prod.images && prod.images[0]) || null;
          const meta = prod.metadata || {};
          return {
            priceId: p.id,
            currency: p.currency,
            unit_amount: p.unit_amount,
            productId: prod.id,
            name: prod.name,
            description: prod.description || '',
            image,
            metadata: meta,
            slug: meta.slug || toSlug(prod.name),
            type: meta.type || null,
          };
        });
      cached = { data: items, ts: Date.now() };
    }

    let result = items;
    if (priceId) {
      result = items.find((i) => i.priceId === priceId) || null;
    } else if (productId) {
      result = items.find((i) => i.productId === productId) || null;
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // Browser kann kurz cachen; CDN (Netlify) länger; schnelle Loads und SWR
        'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400',
      },
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error('list-products error', err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};


