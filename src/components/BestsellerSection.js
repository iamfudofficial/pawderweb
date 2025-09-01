import React, { useRef } from 'react';
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

const BestsellerSection = () => {
  const scrollRef = useRef(null);

  const scrollToCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 200; // Kartenbreite + Gap
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      let newScroll;
      if (direction === 'left') {
        newScroll = Math.max(0, currentScroll - cardWidth);
      } else {
        newScroll = Math.min(maxScroll, currentScroll + cardWidth);
      }

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bestseller-section premium-bestseller-section">
      <h2 className="bestseller-title">Die Bestseller von PAWDER</h2>
      
      <div className="bestseller-container">
        {/* Navigation Arrows für Mobile */}
        <button
          onClick={() => scrollToCard('left')}
          className="bestseller-scroll-arrow left premium-arrow"
        >
          ←
        </button>
        
        <button
          onClick={() => scrollToCard('right')}
          className="bestseller-scroll-arrow right premium-arrow"
        >
          →
        </button>

        <div 
          ref={scrollRef}
          className="bestseller-list premium-bestseller-carousel"
        >
          {bestsellers.map((prod, idx) => (
            <div className="bestseller-card premium-bestseller-card" key={idx}>
              <div className="bestseller-img-wrapper">
                <img src={prod.image} alt={prod.title} className="bestseller-img" />
                {prod.badge && <span className="bestseller-badge">{prod.badge}</span>}
              </div>
              <div className="bestseller-label">{prod.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
