import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

export function getStripe() {
  const publishableKey =
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ||
    (typeof window !== 'undefined' ? window.STRIPE_PUBLISHABLE_KEY : '');

  if (!publishableKey) {
    throw new Error('Stripe Publishable Key fehlt. Setze REACT_APP_STRIPE_PUBLISHABLE_KEY oder window.STRIPE_PUBLISHABLE_KEY.');
  }

  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
}


