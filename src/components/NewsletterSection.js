import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => (
  <section className="newsletter-section">
    <div className="newsletter-content">
      <div className="newsletter-text">
        <h2>Abonniere unseren Newsletter &amp;<br />sichere dir einen 5 EUR* Gutschein!</h2>
        <div className="newsletter-hinweis">*Einlösbar ab einem Einkauf ab € 49,-</div>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="E-Mail*" required className="newsletter-input" />
          <div className="newsletter-options">
            <label><input type="checkbox" /> Hunde-Newsletter</label>
            <label><input type="checkbox" /> Katzen-Newsletter</label>
            <label><input type="checkbox" /> Hunde- &amp; Katzen-Newsletter</label>
          </div>
          <button type="submit" className="newsletter-btn">ANMELDEN</button>
        </form>
        <div className="newsletter-datenschutz">
          Mit Anmeldung zum PAWDER-Newsletter akzeptierst du unsere <a href="/impressum">Datenschutzhinweise</a>.
        </div>
      </div>
      <div className="newsletter-img-wrapper">
        <img src="/newsletter/hundepackung.png" alt="Hund mit Snackpackung" className="newsletter-img" />
      </div>
    </div>
  </section>
);

export default NewsletterSection;
