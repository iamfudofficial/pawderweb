import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Shop.css';

const allProducts = [
  {
    title: 'Leber-Power',
    description: 'Mit Vitamin A-Z für Vitalität & Fell',
    image: '/demo/leberpower.png',
    price: '7,99 €',
    type: 'Vitalität',
  },
  {
    title: 'Knochen-Kick',
    description: 'Mit Calcium & D3 für starke Knochen',
    image: '/demo/knochenkick.png',
    price: '8,49 €',
    type: 'Knochen',
  },
  {
    title: 'Magenwohl',
    description: 'Mit Fenchel & Kamille für einen glücklichen Bauch',
    image: '/demo/magenwohl.png',
    price: '7,49 €',
    type: 'Magen',
  },
  {
    title: 'Fell-Glanz',
    description: 'Mit Omega 3+6 für glänzendes Fell',
    image: '/demo/fellglanz.png',
    price: '8,99 €',
    type: 'Fell',
  },
];

const types = ['Alle', ...Array.from(new Set(allProducts.map(p => p.type)))];

const Shop = () => {
  const [selectedType, setSelectedType] = useState('Alle');
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && types.includes(filter)) {
      setSelectedType(filter);
    }
  }, [searchParams]);
  
  const products = selectedType === 'Alle' ? allProducts : allProducts.filter(p => p.type === selectedType);

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
        <div className="shop-grid">
          {products.map((prod, idx) => (
            <div className="shop-card" key={idx}>
              <img src={prod.image} alt={prod.title} className="shop-card-img" />
              <div className="shop-card-title">{prod.title}</div>
              <div className="shop-card-desc">{prod.description}</div>
              <div className="shop-card-price">{prod.price}</div>
              <button className="shop-card-btn">In den Warenkorb</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop; 