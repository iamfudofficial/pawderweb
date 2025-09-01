import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export const ensureStripe = async () => {
  if (!publishableKey) {
    throw new Error('Stripe Publishable Key fehlt. Bitte REACT_APP_STRIPE_PUBLISHABLE_KEY in .env(.local) setzen und den Dev-Server neu starten.');
  }
  const stripe = await stripePromise;
  if (!stripe) {
    throw new Error('Stripe konnte nicht initialisiert werden.');
  }
  return stripe;
};


