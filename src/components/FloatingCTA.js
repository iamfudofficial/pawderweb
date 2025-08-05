import React, { useState } from 'react';
import './FloatingCTA.css';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="floating-cta">
      <div className={`floating-cta-button ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
        <div className="floating-cta-icon">💰</div>
        <div className="floating-cta-text">
          <span className="floating-cta-main">5€ sichern</span>
          <span className="floating-cta-sub">Newsletter</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="floating-cta-popup">
          <div className="floating-cta-popup-header">
            <h3>5€ Rabatt sichern!</h3>
            <button className="floating-cta-close" onClick={handleClick}>×</button>
          </div>
          <p>Melde dich für unseren Newsletter an und erhalte 5€ Rabatt auf deine erste Pawder-Bestellung!</p>
          <form className="floating-cta-form">
            <input 
              type="email" 
              placeholder="Deine E-Mail-Adresse" 
              className="floating-cta-input"
              required
            />
            <button type="submit" className="floating-cta-submit">
              Anmelden & 5€ sichern
            </button>
          </form>
          <div className="floating-cta-benefits">
            <div className="floating-cta-benefit">✓ Exklusive Angebote</div>
            <div className="floating-cta-benefit">✓ Hundetipps & Rezepte</div>
            <div className="floating-cta-benefit">✓ 5€ Rabatt sofort</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA; 