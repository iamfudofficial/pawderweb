import React from 'react';
import './BestsellerSection.css';

const bestsellers = [
  {
    title: 'MEATBAR',
    image: '/bestseller/meatbar.png',
    badge: 'NEU',
  },
  {
    title: 'WOW Nassfutter',
    image: '/bestseller/nassfutter.png',
  },
  {
    title: 'WOW Trockenfutter',
    image: '/bestseller/trockenfutter.png',
  },
  {
    title: 'WOW Snacks',
    image: '/bestseller/snacks.png',
  },
];

const BestsellerSection = () => (
  <section className="bestseller-section">
    <h2 className="bestseller-title">Die Bestseller von PAWDER</h2>
    <div className="bestseller-list">
      {bestsellers.map((prod, idx) => (
        <div className="bestseller-card" key={idx}>
          <div className="bestseller-img-wrapper">
            <img src={prod.image} alt={prod.title} className="bestseller-img" />
            {prod.badge && <span className="bestseller-badge">{prod.badge}</span>}
          </div>
          <div className="bestseller-label">{prod.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default BestsellerSection;
