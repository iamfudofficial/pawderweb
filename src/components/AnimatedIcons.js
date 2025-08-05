import React from 'react';
import './AnimatedIcons.css';

const AnimatedIcons = () => {
  return (
    <section className="animated-icons-section">
      <div className="animated-icons-container">
        <div className="animated-icons-track">
          <div className="animated-icon-item">
            <span className="animated-icon">🌱</span>
            <span className="animated-icon-text">100% natürlich</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">🩺</span>
            <span className="animated-icon-text">Mit Tierärzten entwickelt</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">🐶</span>
            <span className="animated-icon-text">Für jeden Hund</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">😋</span>
            <span className="animated-icon-text">Macht Futter zum Highlight</span>
          </div>
          {/* Duplikate für nahtlose Animation */}
          <div className="animated-icon-item">
            <span className="animated-icon">🌱</span>
            <span className="animated-icon-text">100% natürlich</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">🩺</span>
            <span className="animated-icon-text">Mit Tierärzten entwickelt</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">🐶</span>
            <span className="animated-icon-text">Für jeden Hund</span>
          </div>
          <div className="animated-icon-item">
            <span className="animated-icon">😋</span>
            <span className="animated-icon-text">Macht Futter zum Highlight</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedIcons; 