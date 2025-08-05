import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const storyCards = [
  {
    title: 'Die Pawder Geschichte',
    subtitle: 'Wie alles begann',
    image: '/demo/pawder-founder.jpg',
    icon: '▶️',
    link: '/story'
  },
  {
    title: 'Die Pawder Qualität',
    subtitle: '100% natürlich & nachhaltig',
    image: '/demo/pawder-ingredients.jpg',
    icon: '🔍',
    link: '/quality'
  },
  {
    title: 'Der Pawder Shop',
    subtitle: 'Finde das richtige Pawder für deinen Hund',
    image: '/demo/pawder-products.jpg',
    icon: '🛍️',
    link: '/shop'
  }
];

const StoryCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 340; // Kartenbreite (320px) + Gap (20px)
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      let newScroll;
      if (direction === 'left') {
        newScroll = Math.max(0, currentScroll - cardWidth);
      } else {
        newScroll = Math.min(maxScroll, currentScroll + cardWidth);
      }

      console.log('StoryCards: Scrolling from', currentScroll, 'to', newScroll, 'direction:', direction);

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 320;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, storyCards.length - 1)));
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const newScroll = index * cardWidth;
      console.log('StoryCards: Scrolling to index', index, 'at position', newScroll);

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    padding: '20px 0'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 4px 18px #e4e4e4',
    padding: '0',
    width: '320px',
    height: 'auto',
    minHeight: '400px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    transition: 'box-shadow 0.18s, transform 0.18s',
    overflow: 'hidden'
  };

  return (
    <section style={{
      width: '100%',
      background: '#f8f6f2',
      padding: '48px 0 56px 0',
      textAlign: 'center',
      position: 'relative'
    }}>
      <h2 style={{
        fontSize: '2.2rem',
        fontWeight: 900,
        color: '#444',
        marginBottom: '38px',
        letterSpacing: '0.5px'
      }}>
        Entdecke Pawder
      </h2>

      <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Linker Pfeil */}
        <button
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            zIndex: 10005
          }}
          onClick={() => scrollToCard('left')}
          aria-label="Nach links scrollen"
        >
          <svg viewBox="0 0 24 24" style={{width: '20px', height: '20px', fill: '#444'}}>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        {/* Scroll Container */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 80px'
        }}>
          <div style={listStyle} ref={scrollRef}>
            {storyCards.map((card, idx) => (
              <Link style={cardStyle} to={card.link} key={idx}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      color: '#fff'
                    }}>
                      {card.icon}
                    </div>
                  </div>
                </div>
                <div style={{
                  padding: '30px 24px',
                  textAlign: 'left',
                  flex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#444',
                    marginBottom: '10px'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rechter Pfeil */}
        <button
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            zIndex: 10005
          }}
          onClick={() => scrollToCard('right')}
          aria-label="Nach rechts scrollen"
        >
          <svg viewBox="0 0 24 24" style={{width: '20px', height: '20px', fill: '#444'}}>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '20px'
      }}>
        {storyCards.map((_, idx) => (
          <button
            key={idx}
            style={{
              width: '8px',
              height: '8px',
              border: 'none',
              borderRadius: '50%',
              background: idx === currentIndex ? '#8dd10a' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Zu Karte ${idx + 1} springen`}
          />
        ))}
      </div>
    </section>
  );
};

export default StoryCards; 