import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/.netlify/functions/list-products');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Nur die ersten 4 Produkte für das Karussell anzeigen
          setProducts(data.slice(0, 4));
        }
      } catch (error) {
        console.error('Fehler beim Laden der Produkte:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Karussell beim Laden auf die erste Karte setzen
  useEffect(() => {
    if (scrollRef.current && products.length > 0) {
      // Kurze Verzögerung für DOM-Rendering
      setTimeout(() => {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: 'auto'
        });
      }, 100);
    }
  }, [products]);

  const handleBuyNow = async (priceId) => {
    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          quantity: 1,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      await stripe.redirectToCheckout({ sessionId });
      
    } catch (error) {
      console.error('Fehler beim Checkout:', error);
      alert('Fehler beim Checkout. Bitte versuchen Sie es erneut.');
    }
  };

  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  const scrollToCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 300; // Kartenbreite + Gap
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      let newScroll;
      if (scrollRef.current) {
        if (direction === 'left') {
          newScroll = Math.max(0, currentScroll - cardWidth);
        } else if (direction === 'right') {
          newScroll = Math.min(maxScroll, currentScroll + cardWidth);
        } else if (direction === 'start') {
          newScroll = 0; // Zurück zum Anfang
        }
      }

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-showcase-green premium-product-section">
      <div className="product-showcase-container">
        {/* Navigation Arrows für Mobile */}
        <button
          onClick={() => scrollToCard('left')}
          className="product-scroll-arrow left premium-arrow"
        >
          ←
        </button>
        
        <button
          onClick={() => scrollToCard('right')}
          className="product-scroll-arrow right premium-arrow"
        >
          →
        </button>

        {/* Zurück zum Anfang Button */}
        <button
          onClick={scrollToStart}
          className="product-scroll-arrow start premium-arrow"
          style={{
            top: '10px',
            right: '10px',
            width: '40px',
            height: '40px',
            fontSize: '16px',
            background: 'rgba(183, 224, 0, 0.9)',
            color: '#2565a6'
          }}
        >
          ⌂
        </button>

        <div 
          ref={scrollRef}
          className="product-showcase-list premium-product-carousel"
        >
          {loading ? (
            <div className="loading-message">Produkte werden geladen...</div>
          ) : products.length === 0 ? (
            <div className="no-products-message">Keine Produkte verfügbar</div>
          ) : (
            products.map((product, idx) => (
              <div 
                className="product-card-green premium-product-card" 
                key={product.priceId}
                onClick={() => handleProductClick(product.slug)}
                style={{ cursor: 'pointer' }}
              >
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-img-green" 
                    onError={(e) => {
                      e.target.src = '/demo/placeholder.png'; // Fallback-Bild
                    }}
                  />
                )}
                <div className="product-title-green">{product.name}</div>
                <div className="product-desc-green">
                  {product.description || 'Premium Hundefutter-Ergänzung'}
                </div>
                <div className="product-price-green">
                  €{(product.unit_amount / 100).toFixed(2)}
                </div>
                <button
                  className="product-btn-green premium-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyNow(product.priceId);
                  }}
                >
                  Jetzt kaufen
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="trustpilot-bar">
        <span className="trustpilot-label">Hervorragend</span>
        <img src="/5sternetrustpilot/pngtree-5-star-five-vector-png-image_15322775.png" alt="5 Sterne" className="trustpilot-stars" />
        <span className="trustpilot-reviews">1.886 Bewertungen auf</span>
        <img src="/5sternetrustpilot/588-5885660_adding-trustpilot-image-next-to-logo-on-supply.png" alt="Trustpilot" className="trustpilot-logo" />
      </div>
    </section>
  );
};

export default ProductShowcase;
