import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductShowcase.css';

const products = [
  {
    id: 'leber-power',
    title: 'Leber-Power',
    description: 'Mit Vitamin A-Z für Vitalität & Fell',
    image: '/demo/leberpower.png', // Platzhalterbild
    button: 'Jetzt entdecken',
    filter: 'Vitalität'
  },
  {
    id: 'knochen-kick',
    title: 'Knochen-Kick',
    description: 'Mit Calcium & D3 für starke Knochen',
    image: '/demo/knochenkick.png', // Platzhalterbild
    button: 'Jetzt entdecken',
    filter: 'Knochen'
  },
  {
    id: 'magenwohl',
    title: 'Magenwohl',
    description: 'Mit Fenchel & Kamille für einen glücklichen Bauch',
    image: '/demo/magenwohl.png', // Platzhalterbild
    button: 'Jetzt entdecken',
    filter: 'Magen'
  },
  {
    id: 'fell-glanz',
    title: 'Fell-Glanz',
    description: 'Mit Omega 3+6 für glänzendes Fell',
    image: '/demo/fellglanz.png', // Platzhalterbild
    button: 'Jetzt entdecken',
    filter: 'Fell'
  }
];

const ProductShowcase = () => {
  const navigate = useNavigate();

  const handleDiscover = (filter) => {
    navigate(`/shop?filter=${filter}`);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="product-showcase-green">
      <div className="product-showcase-list">
        {products.map((prod, idx) => (
          <div 
            className="product-card-green" 
            key={idx}
            onClick={() => handleProductClick(prod.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={prod.image} alt={prod.title} className="product-img-green" />
            <div className="product-title-green">{prod.title}</div>
            <div className="product-desc-green">{prod.description}</div>
            <button
              className="product-btn-green"
              onClick={(e) => {
                e.stopPropagation();
                handleDiscover(prod.filter);
              }}
            >
              {prod.button}
            </button>
          </div>
        ))}
      </div>
      <div className="trustpilot-bar">
        <span className="trustpilot-label">Hervorragend</span>
        <img src="/trustpilot/stars.svg" alt="5 Sterne" className="trustpilot-stars" />
        <span className="trustpilot-reviews">1.886 Bewertungen auf</span>
        <img src="/trustpilot/logo.svg" alt="Trustpilot" className="trustpilot-logo" />
      </div>
    </section>
  );
};

export default ProductShowcase;
