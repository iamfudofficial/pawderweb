import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde normalerweise die Formularverarbeitung stattfinden
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Zurück
        </button>
        
        <div className="contact-content">
          <div className="contact-header">
            <h1>Kontakt</h1>
            <p className="contact-subtitle">Wir sind für Sie da!</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Kontaktinformationen</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Adresse</h3>
                  <p>PAWDER GmbH<br />Hundestr. 1<br />12345 Berlin</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>E-Mail</h3>
                  <p>hello@pawder.de</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Telefon</h3>
                  <p>+49 30 12345678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Öffnungszeiten</h3>
                  <p>Mo-Do: 9-17 Uhr<br />Fr: 9-15 Uhr</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🚚</div>
                <div>
                  <h3>Versand</h3>
                  <p>Versandkostenfrei ab 50€<br />1-3 Werktage Lieferzeit</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h2>Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Betreff</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="bestellung">Bestellung</option>
                    <option value="rücksendung">Rücksendung</option>
                    <option value="produkt">Produktfrage</option>
                    <option value="kooperation">Kooperation</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
          
          <div className="faq-section">
            <h2>Häufig gestellte Fragen</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Wie lange dauert die Lieferung?</h3>
                <p>Wir versenden innerhalb von 1-3 Werktagen. Die Lieferung erfolgt kostenlos ab einem Bestellwert von 50€.</p>
              </div>
              <div className="faq-item">
                <h3>Kann ich meine Bestellung zurückgeben?</h3>
                <p>Ja, Sie haben 14 Tage Zeit, Ihre Bestellung zurückzugeben. Kontaktieren Sie uns einfach per E-Mail.</p>
              </div>
              <div className="faq-item">
                <h3>Sind die Produkte für alle Hunde geeignet?</h3>
                <p>Unsere Produkte sind für gesunde Hunde ab 6 Monaten geeignet. Bei Unsicherheiten fragen Sie Ihren Tierarzt.</p>
              </div>
              <div className="faq-item">
                <h3>Welche Zahlungsmethoden akzeptieren Sie?</h3>
                <p>Wir akzeptieren PayPal, Kreditkarte, Klarna und Apple Pay. Alle Zahlungen sind SSL-verschlüsselt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 