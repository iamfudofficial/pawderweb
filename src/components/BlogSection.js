import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

const blogPosts = [
  {
    title: 'Läufigkeit und Kastration',
    image: '/blog/laeufigkeit.jpg',
    link: '/blog/laeufigkeit',
    excerpt: 'Alles was Sie über die Läufigkeit und Kastration bei Hündinnen wissen sollten.',
  },
  {
    title: 'Wandern mit Hund',
    image: '/blog/wandern.jpg',
    link: '/blog/wandern',
    excerpt: 'Tipps und Tricks für entspannte Wanderungen mit Ihrem vierbeinigen Begleiter.',
  },
  {
    title: 'Zecken beim Hund',
    image: '/blog/zecken.jpg',
    link: '/blog/zecken',
    excerpt: 'Wie Sie Ihren Hund vor Zecken schützen und was bei einem Zeckenbiss zu tun ist.',
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToCard = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 220; // Kartenbreite (200px) + Gap (20px)
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      let newScroll;
      if (direction === 'left') {
        newScroll = Math.max(0, currentScroll - cardWidth);
      } else {
        newScroll = Math.min(maxScroll, currentScroll + cardWidth);
      }
      
      console.log('Scrolling from', currentScroll, 'to', newScroll, 'direction:', direction);
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 220;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, blogPosts.length - 1)));
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 220;
      const newScroll = index * cardWidth;
      console.log('Scrolling to index', index, 'at position', newScroll);
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const listStyle = {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    paddingBottom: '10px'
  };
      
  const cardStyle = {
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 4px 18px #e4e4e4',
    padding: '0',
    width: '300px',
    height: 'auto',
    minHeight: '380px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    transition: 'box-shadow 0.18s, transform 0.18s',
    overflow: 'hidden'
  };

  return (
    <section className="blog-section">
      <h2 className="blog-title">Hundewissen</h2>
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
            {blogPosts.map((blog, idx) => (
              <Link style={cardStyle} to={blog.link} key={idx}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{
                  padding: '25px 20px',
                  textAlign: 'left',
                  flex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#444',
                    marginBottom: '8px'
                  }}>
                    {blog.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {blog.excerpt}
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
      
      <div className="scroll-indicators">
        {blogPosts.map((_, idx) => (
          <button
            key={idx}
            className={`scroll-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Zu Karte ${idx + 1} springen`}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
