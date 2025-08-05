import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const productData = {
  'leber-power': {
    title: 'Leber-Power',
    subtitle: 'Mit Vitamin A-Z für Vitalität & Fell',
    description: 'Unser Leber-Power Pawder ist speziell entwickelt, um die Vitalität deines Hundes zu unterstützen und für ein gesundes, glänzendes Fell zu sorgen.',
    image: '/demo/leberpower.png',
    price: '19,99€',
    benefits: [
      'Unterstützt die Leberfunktion',
      'Fördert gesundes Fell und Haut',
      'Stärkt das Immunsystem',
      'Verbessert die Vitalität'
    ],
    ingredients: [
      'Bierhefe',
      'Leberpulver',
      'Vitamin A, B, C, D, E',
      'Zink',
      'Omega-3 Fettsäuren'
    ],
    dosage: '1-2 Teelöffel pro Mahlzeit',
    size: '100g Dose',
    type: 'Vitalität'
  },
  'knochen-kick': {
    title: 'Knochen-Kick',
    subtitle: 'Mit Calcium & D3 für starke Knochen',
    description: 'Unser Knochen-Kick Pawder unterstützt die Knochengesundheit deines Hundes und sorgt für starke Gelenke und Zähne.',
    image: '/demo/knochenkick.png',
    price: '19,99€',
    benefits: [
      'Stärkt Knochen und Gelenke',
      'Unterstützt die Zahnentwicklung',
      'Fördert die Muskelgesundheit',
      'Verbessert die Beweglichkeit'
    ],
    ingredients: [
      'Calciumcarbonat',
      'Vitamin D3',
      'Kollagen',
      'Glucosamin',
      'Chondroitin'
    ],
    dosage: '1-2 Teelöffel pro Mahlzeit',
    size: '100g Dose',
    type: 'Knochen'
  },
  'magenwohl': {
    title: 'Magenwohl',
    subtitle: 'Mit Fenchel & Kamille für einen glücklichen Bauch',
    description: 'Unser Magenwohl Pawder beruhigt den Magen-Darm-Trakt und sorgt für eine gesunde Verdauung deines Hundes.',
    image: '/demo/magenwohl.png',
    price: '19,99€',
    benefits: [
      'Beruhigt den Magen-Darm-Trakt',
      'Fördert eine gesunde Verdauung',
      'Reduziert Blähungen',
      'Unterstützt die Darmflora'
    ],
    ingredients: [
      'Fenchel',
      'Kamille',
      'Ingwer',
      'Probiotika',
      'Pektin'
    ],
    dosage: '1-2 Teelöffel pro Mahlzeit',
    size: '100g Dose',
    type: 'Magen'
  },
  'fell-glanz': {
    title: 'Fell-Glanz',
    subtitle: 'Mit Omega 3+6 für glänzendes Fell',
    description: 'Unser Fell-Glanz Pawder sorgt für ein gesundes, glänzendes Fell und eine geschmeidige Haut deines Hundes.',
    image: '/demo/fellglanz.png',
    price: '19,99€',
    benefits: [
      'Fördert glänzendes Fell',
      'Beruhigt trockene Haut',
      'Reduziert Juckreiz',
      'Stärkt die Haarfollikel'
    ],
    ingredients: [
      'Lachsöl',
      'Omega-3 Fettsäuren',
      'Omega-6 Fettsäuren',
      'Biotin',
      'Vitamin E'
    ],
    dosage: '1-2 Teelöffel pro Mahlzeit',
    size: '100g Dose',
    type: 'Fell'
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData[productId];

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-detail-container">
          <h1>Produkt nicht gefunden</h1>
          <button onClick={() => navigate('/')} className="back-btn">
            Zurück zur Startseite
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Zurück
        </button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="product-detail-info">
            <h1 className="product-detail-title">{product.title}</h1>
            <h2 className="product-detail-subtitle">{product.subtitle}</h2>
            <p className="product-detail-description">{product.description}</p>
            
            <div className="product-detail-price">{product.price}</div>
            
            <div className="product-detail-section">
              <h3>Vorteile</h3>
              <ul className="product-detail-benefits">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>✓ {benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-detail-section">
              <h3>Zutaten</h3>
              <ul className="product-detail-ingredients">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-detail-section">
              <h3>Dosierung</h3>
              <p className="product-detail-dosage">{product.dosage}</p>
            </div>
            
            <div className="product-detail-section">
              <h3>Größe</h3>
              <p className="product-detail-size">{product.size}</p>
            </div>
            
                         <div className="product-detail-actions">
               <button 
                 className="add-to-cart-btn"
                 onClick={() => navigate(`/shop?filter=${product.type}`)}
               >
                 In den Warenkorb
               </button>
               <button 
                 className="shop-btn"
                 onClick={() => navigate('/shop')}
               >
                 Zum Shop
               </button>
             </div>
             
             <div className="product-detail-external">
               <h3>Oder bestelle bei unseren Partnern:</h3>
               <div className="external-buttons">
                 <a 
                   href="https://www.amazon.de/s?k=pawder+hundewürze" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="amazon-btn"
                 >
                   <span className="amazon-icon">📦</span>
                   Bei Amazon bestellen
                 </a>
                 <a 
                   href="https://www.ebay.de/sch/i.html?_nkw=pawder+hundewürze" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="ebay-btn"
                 >
                   <span className="ebay-icon">🛒</span>
                   Bei eBay bestellen
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 