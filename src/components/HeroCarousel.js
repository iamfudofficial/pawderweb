import React, { useEffect, useRef, useState } from 'react';
import './HeroCarousel.css';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  // 3 einfache blaue Slides
  const slides = [
    {
      id: 1,
      bg: 'linear-gradient(135deg, #2565a6 0%, #1e4a8a 100%)',
    },
    {
      id: 2,
      bg: 'linear-gradient(135deg, #1e4a8a 0%, #0d2e57 100%)',
    },
    {
      id: 3,
      bg: 'linear-gradient(135deg, #0d2e57 0%, #041a33 100%)',
    },
  ];

  useEffect(() => {
    // Auto-Scroll alle 4 Sekunden
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-carousel">
      <div 
        className="hero-carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-slide"
            style={{
              background: slide.bg,
            }}
          >
            {/* Hier kannst du einfach deine Bilder einfügen */}
            <div className="hero-slide-content">
              <h2>Slide {index + 1}</h2>
              <p>Hier kannst du dein Bild einfügen</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button className="hero-nav left" onClick={goToPrev}>
        ‹
      </button>
      <button className="hero-nav right" onClick={goToNext}>
        ›
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}


