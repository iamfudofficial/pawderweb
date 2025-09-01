const secretKey = process.env.STRIPE_SECRET_KEY;
let stripe = null;
if (secretKey) {
  stripe = require('stripe')(secretKey);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    if (!secretKey || !stripe) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'STRIPE_SECRET_KEY fehlt auf dem Server. Bitte als Netlify-Umgebungsvariable setzen.' }),
      };
    }
    const { items, success_url, cancel_url, currency } = JSON.parse(event.body || '{}');

    if (!Array.isArray(items) || items.length === 0) {
      return { statusCode: 400, body: 'No items provided' };
    }

    // Validierung der Beträge
    for (const it of items) {
      const amount = Math.round(Number(it.unit_amount) || 0);
      if (!amount || amount < 50) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Ungültiger Betrag. unit_amount muss in Cent angegeben werden (>=50).' }) };
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map((it) => ({
        price_data: {
          currency: (currency || 'eur').toLowerCase(),
          product_data: { name: it.name, images: it.images || [] },
          unit_amount: Math.round(Number(it.unit_amount) || 0),
        },
        quantity: it.quantity || 1,
      })),
      success_url: success_url || `${process.env.URL || 'http://localhost:8888'}/?checkout=success`,
      cancel_url: cancel_url || `${process.env.URL || 'http://localhost:8888'}/?checkout=cancel`,
      shipping_address_collection: { allowed_countries: ['DE', 'AT', 'CH'] },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: session.id, url: session.url }),
    };
  } catch (err) {
    console.error('Stripe Function Error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Unbekannter Fehler' }),
    };
  }
};


