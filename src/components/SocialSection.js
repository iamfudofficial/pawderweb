import React from 'react';
import './SocialSection.css';

const SocialSection = () => (
  <section className="social-section">
    <h2 className="social-title">Folge uns auf Instagram</h2>
    <div className="social-instagram">
      <a 
        href="https://instagram.com/pawder.de" 
        className="instagram-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="/social/Instagram_logo_2022.svg.png" 
          alt="Folge uns auf Instagram" 
          className="instagram-icon" 
        />
        <span className="instagram-text">@pawder.de</span>
      </a>
    </div>
  </section>
);

export default SocialSection;
