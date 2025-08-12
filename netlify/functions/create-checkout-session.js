const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, success_url, cancel_url, currency } = JSON.parse(event.body || '{}');

    if (!Array.isArray(items) || items.length === 0) {
      return { statusCode: 400, body: 'No items provided' };
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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};


