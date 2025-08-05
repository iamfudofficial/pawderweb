import React from 'react';
import { Link } from 'react-router-dom';
import ShippingInfo from './ShippingInfo';
import './Shipping.css';

const Shipping = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-page-header">
        <Link to="/" className="shipping-back-btn">
          ← Zurück zur Startseite
        </Link>
        <h1 className="shipping-page-title">🚚 Versand & Lieferung</h1>
        <p className="shipping-page-subtitle">
          Alles was Sie über unseren Versand wissen müssen
        </p>
      </div>
      
      <ShippingInfo />
      
      <div className="shipping-page-footer">
        <div className="shipping-contact">
          <h3>Haben Sie Fragen zum Versand?</h3>
          <p>Unser Kundenservice hilft Ihnen gerne weiter</p>
          <div className="shipping-contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>service@pawder.de</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+49 (0) 123 456789</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <span>Live Chat verfügbar</span>
            </div>
          </div>
        </div>
        
        <Link to="/shop" className="shipping-shop-btn">
          🛍️ Jetzt einkaufen
        </Link>
      </div>
    </div>
  );
};

export default Shipping; 