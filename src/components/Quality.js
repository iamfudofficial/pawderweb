import React from 'react';
import { Link } from 'react-router-dom';
import './Quality.css';

const Quality = () => {
  return (
    <div className="quality-page">
      <div className="quality-header">
        <Link to="/" className="quality-back-btn">← Zurück zur Startseite</Link>
        <h1 className="quality-title">Die Pawder Qualität</h1>
        <p className="quality-subtitle">100% natürlich & nachhaltig</p>
      </div>
      
      <div className="quality-content">
        <div className="quality-section">
          <div className="quality-image">
            <img src="/demo/pawder-ingredients.jpg" alt="Pawder Zutaten" />
          </div>
          <div className="quality-text">
            <h2>Nur das Beste für deinen Hund</h2>
            <p>Bei Pawder verwenden wir ausschließlich hochwertige, natürliche Zutaten. Jede Komponente wird sorgfältig ausgewählt und getestet, um die beste Qualität für deinen Vierbeiner zu garantieren.</p>
            <div className="quality-features">
              <div className="quality-feature">
                <span className="quality-feature-icon">🌱</span>
                <span>100% natürliche Zutaten</span>
              </div>
              <div className="quality-feature">
                <span className="quality-feature-icon">🩺</span>
                <span>Mit Tierärzten entwickelt</span>
              </div>
              <div className="quality-feature">
                <span className="quality-feature-icon">🚫</span>
                <span>Keine künstlichen Zusätze</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="quality-section quality-section-reverse">
          <div className="quality-text">
            <h2>Nachhaltigkeit im Fokus</h2>
            <p>Wir glauben an eine nachhaltige Zukunft für Mensch und Tier. Deshalb setzen wir auf:</p>
            <ul>
              <li><strong>Klimaneutrale Produktion:</strong> Unsere CO2-Emissionen werden vollständig kompensiert</li>
              <li><strong>Recycelbare Verpackung:</strong> Alle Verpackungen sind zu 100% recycelbar</li>
              <li><strong>Regionale Zutaten:</strong> Wo möglich, beziehen wir Zutaten aus der Region</li>
              <li><strong>Faire Partnerschaften:</strong> Wir arbeiten nur mit verantwortungsvollen Lieferanten</li>
            </ul>
          </div>
          <div className="quality-image">
            <img src="/demo/pawder-sustainability.jpg" alt="Nachhaltigkeit" />
          </div>
        </div>
        
        <div className="quality-section">
          <div className="quality-image">
            <img src="/demo/pawder-production.jpg" alt="Pawder Produktion" />
          </div>
          <div className="quality-text">
            <h2>Höchste Qualitätsstandards</h2>
            <p>Jede Charge Pawder durchläuft strenge Qualitätskontrollen. Von der Rohstoffauswahl bis zum fertigen Produkt wird jeder Schritt überwacht und dokumentiert.</p>
            <p>Unsere Produktion erfolgt in zertifizierten Anlagen, die höchsten Hygienestandards entsprechen. So kannst du sicher sein, dass dein Hund nur das Beste bekommt.</p>
          </div>
        </div>
      </div>
      
      <div className="quality-cta">
        <h3>Überzeuge dich selbst von der Pawder-Qualität</h3>
        <Link to="/shop" className="quality-cta-btn">Jetzt bestellen</Link>
      </div>
    </div>
  );
};

export default Quality; 