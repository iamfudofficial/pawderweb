import React from 'react';
import './DrPawTestimonial.css';

const DrPawTestimonial = () => {
  return (
    <section className="dr-paw-testimonial">
      <div className="dr-paw-container">
        <div className="dr-paw-content">
          <div className="dr-paw-text">
            <div className="dr-paw-badge">Tierarzt-Empfehlung</div>
            <h2 className="dr-paw-title">
              "Mein Hund ist wie verwandelt!"
            </h2>
            <div className="dr-paw-quote">
              <p>
                "Als Tierarzt war ich zunächst skeptisch. Doch seit ich Pawder über 
                das Futter meines eigenen Hundes streue, ist er wie verwandelt: 
                <strong> Viel gesünder, ausgelassener und voller Energie!</strong>
              </p>
              <p>
                Er startet jeden Tag mit so viel Lebensfreude und tobt wieder wie 
                ein junger Hund. <strong>Die Veränderung ist einfach unglaublich</strong> – 
                und das alles nur durch ein natürliches Gewürz!"
              </p>
              <p className="dr-paw-highlight">
                "Ich empfehle Pawder jetzt all meinen Patienten. 
                Die Ergebnisse sprechen für sich."
              </p>
            </div>
            <div className="dr-paw-signature">
              <div className="dr-paw-name">Dr. med. vet. PAW</div>
              <div className="dr-paw-credentials">Tierarzt & Hundeexperte</div>
              <div className="dr-paw-experience">15+ Jahre Erfahrung</div>
            </div>
            <div className="dr-paw-cta">
              <a href="#products" className="dr-paw-btn">
                Jetzt Pawder für meinen Hund
              </a>
              <div className="dr-paw-guarantee">
                ✓ 30 Tage Geld-zurück-Garantie
              </div>
            </div>
          </div>
          <div className="dr-paw-image-section">
            <div className="dr-paw-image-wrapper">
              <img 
                src="/drpaw/unnamed.png" 
                alt="Dr. PAW mit seinem gesunden Hund" 
                className="dr-paw-image"
              />
              <div className="dr-paw-image-badge">
                <span className="dr-paw-badge-icon">⭐</span>
                <span className="dr-paw-badge-text">Tierarzt-geprüft</span>
              </div>
            </div>
            <div className="dr-paw-stats">
              <div className="dr-paw-stat">
                <div className="dr-paw-stat-number">98%</div>
                <div className="dr-paw-stat-text">Zufriedene Hundebesitzer</div>
              </div>
              <div className="dr-paw-stat">
                <div className="dr-paw-stat-number">15+</div>
                <div className="dr-paw-stat-text">Jahre Erfahrung</div>
              </div>
              <div className="dr-paw-stat">
                <div className="dr-paw-stat-number">1000+</div>
                <div className="dr-paw-stat-text">Glückliche Hunde</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrPawTestimonial;
