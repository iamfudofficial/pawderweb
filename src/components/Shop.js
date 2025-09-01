import React, { useState, useEffect, useMemo } from 'react';
import { ensureStripe } from '../stripe';
import { functionUrl } from '../utils/netlify';
import { useSearchParams } from 'react-router-dom';
import './Shop.css';

const baseTypes = ['Alle'];

const Shop = () => {
  const [selectedType, setSelectedType] = useState('Alle');
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [types, setTypes] = useState(baseTypes);
  
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && types.includes(filter)) {
      setSelectedType(filter);
    }
  }, [searchParams]);
  
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const url = functionUrl('list-products');
        const res = await fetch(url);
        if (!res.ok) {
          const t = await res.text();
          console.error('Produkte laden fehlgeschlagen:', res.status, t);
          setAllProducts([]);
          return;
        }
        const data = await res.json();
        const items = Array.isArray(data) ? data : [];
        const mapped = items.map((it) => ({
          title: it.name,
          description: it.description,
          image: it.image,
          priceCents: it.unit_amount,
          price: `${(it.unit_amount/100).toFixed(2).replace('.', ',')} €`,
          type: it.type || 'Alle',
          priceId: it.priceId,
        }));
        setAllProducts(mapped);
        const dynTypes = Array.from(new Set(mapped.map(p => p.type))).filter(Boolean);
        setTypes(['Alle', ...dynTypes]);
      } catch (e) {
        console.error('Stripe Produkte laden fehlgeschlagen', e);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const products = selectedType === 'Alle' ? allProducts : allProducts.filter(p => p.type === selectedType);

  const chips = useMemo(() => types.map((type) => ({
    label: type,
    value: type,
    active: selectedType === type,
  })), [types, selectedType]);

  const handleCheckout = async (prod) => {
    const stripe = await ensureStripe();
    const cents = prod.priceCents || Math.round(parseFloat((prod.price || '0').replace(/[^0-9,\.]/g, '').replace(',', '.')) * 100);
    const res = await fetch(functionUrl('create-checkout-session'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currency: 'EUR',
        items: [
          {
            name: prod.title,
            unit_amount: cents,
            quantity: 1,
            images: [prod.image],
          },
        ],
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error('Checkout-Fehler:', txt);
      alert('Kauf konnte nicht gestartet werden: ' + (txt || res.status));
      return;
    }
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
      return;
    }
    if (data.id) {
      await stripe?.redirectToCheckout({ sessionId: data.id });
    }
  };

  return (
    <div className="shop-page">
      <aside className="shop-sidebar">
        <h2 className="shop-sidebar-title">Filtern</h2>
        <div className="shop-filter-group">
          <div className="shop-filter-label">Funktion</div>
          {types.map(type => (
            <label key={type} className="shop-filter-option">
              <input
                type="radio"
                name="type"
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </aside>
      <main className="shop-main">
        <h1 className="shop-title">Pawder Shop</h1>
        {/* Mobile Filter-Chips */}
        <div className="shop-filter-chips" role="tablist" aria-label="Produktfilter">
          {chips.map((c) => (
            <button
              key={c.value}
              role="tab"
              aria-selected={c.active}
              className={`chip ${c.active ? 'active' : ''}`}
              onClick={() => setSelectedType(c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>
        {loading && <div style={{padding: '20px'}}>Produkte werden geladen…</div>}
        <div className="shop-grid">
          {products.map((prod, idx) => (
            <div className="shop-card" key={idx}>
              <img src={prod.image} alt={prod.title} className="shop-card-img" loading="lazy" />
              <div className="shop-card-title">{prod.title}</div>
              <div className="shop-card-desc">{prod.description}</div>
              <div className="shop-card-price">{prod.price}</div>
              <button className="shop-card-btn" onClick={() => handleCheckout(prod)}>Jetzt kaufen</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop; 