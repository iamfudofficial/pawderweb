Stripe Konfiguration
====================

1) .env.local anlegen (nicht commiten):

REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_live_... (im Netlify Dashboard als Umgebungsvariable setzen)

2) Netlify Einstellungen
- Functions-Ordner: netlify/functions
- Environment Vars: STRIPE_SECRET_KEY, URL (optional)

3) Lokales Testen
- Netlify CLI: `npm i -g netlify-cli`
- `netlify dev` starten (leitet `/.netlify/functions/*` richtig weiter)


