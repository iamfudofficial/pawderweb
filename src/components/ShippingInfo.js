import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <div className="shipping-info-section">
      <div className="shipping-container">
        <div className="shipping-header">
          <h2>🚚 Versand & Lieferung</h2>
          <p>Wir liefern schnell und zuverlässig direkt zu Ihnen nach Hause</p>
        </div>
        
        <div className="shipping-grid">
          <div className="shipping-card">
            <div className="shipping-icon">🇩🇪</div>
            <h3>Kostenloser Versand</h3>
            <p className="shipping-highlight">Ab 50€ Bestellwert</p>
            <p>In ganz Deutschland versenden wir kostenlos mit DHL</p>
          </div>
          
          <div className="shipping-card">
            <div className="shipping-icon">⚡</div>
            <h3>Schnelle Lieferung</h3>
            <p className="shipping-highlight">1-3 Werktage</p>
            <p>Bestellungen bis 14:00 Uhr werden noch am selben Tag versendet</p>
          </div>
          
          <div className="shipping-card">
            <div className="shipping-icon">📦</div>
            <h3>Sichere Verpackung</h3>
            <p className="shipping-highlight">Umweltfreundlich</p>
            <p>Wir verwenden nachhaltige Verpackungsmaterialien</p>
          </div>
          
          <div className="shipping-card">
            <div className="shipping-icon">🔍</div>
            <h3>Sendungsverfolgung</h3>
            <p className="shipping-highlight">Immer informiert</p>
            <p>Sie erhalten eine E-Mail mit der Sendungsverfolgung</p>
          </div>
        </div>
        
        <div className="shipping-details">
          <div className="shipping-table">
            <h3>Versandkosten im Detail</h3>
            <div className="shipping-row">
              <span className="shipping-amount">Ab 50€</span>
              <span className="shipping-cost">Kostenlos</span>
              <span className="shipping-service">DHL Express</span>
            </div>
            <div className="shipping-row">
              <span className="shipping-amount">Unter 50€</span>
              <span className="shipping-cost">4,99€</span>
              <span className="shipping-service">DHL Standard</span>
            </div>
            <div className="shipping-row">
              <span className="shipping-amount">Express</span>
              <span className="shipping-cost">9,99€</span>
              <span className="shipping-service">DHL Express (24h)</span>
            </div>
          </div>
          
          <div className="shipping-note">
            <h4>📋 Wichtige Hinweise:</h4>
            <ul>
              <li>Versand nur innerhalb Deutschlands</li>
              <li>Lieferung an Packstationen möglich</li>
              <li>Keine Lieferung an Postfächer</li>
              <li>Versandkosten werden automatisch berechnet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo; 