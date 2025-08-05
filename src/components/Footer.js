import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="pawder-footer">
    <div className="footer-top">
      <div className="footer-payment">
        <div className="footer-payment-title">Sichere Bezahlmethoden</div>
        <div className="footer-payment-logos">
          <img src="/footer/paypal.svg" alt="PayPal" />
          <img src="/footer/klarna.svg" alt="Klarna" />
          <img src="/footer/visa.svg" alt="Visa" />
          <img src="/footer/applepay.svg" alt="Apple Pay" />
        </div>
        <div className="footer-payment-desc">Einfache und sichere Zahlung<br />SSL-Verschlüsselung &amp; Käuferschutz</div>
        <a className="footer-btn" href="javascript:void(0)">MEHR ZUM THEMA</a>
      </div>
      <div className="footer-shipping">
        <div className="footer-payment-title">Europaweite Lieferung</div>
        <div className="footer-shipping-logos">
          <img src="/footer/dhl.svg" alt="DHL" />
          <img src="/footer/dpd.svg" alt="DPD" />
        </div>
        <div className="footer-payment-desc">Versandkostenfrei ab 50 €<br />Schnelle Lieferung</div>
        <Link className="footer-btn" to="/shipping">INFOS ZUM VERSAND</Link>
      </div>
    </div>
    <div className="footer-main">
      <div className="footer-brand">
        <img src="/logo/WhatsApp Image 2025-04-27 at 09.58.57-Photoroom.png" alt="PAWDER Logo" className="footer-logo" />
        <div className="footer-contact">
          <div>Mo-Do: 9-17 Uhr, Fr: 9-15 Uhr</div>
          <div>hello@pawder.de</div>
          <div>PAWDER GmbH<br />Hundestr. 1<br />12345 Berlin</div>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <div className="footer-link-title">Unternehmen</div>
          <Link to="/about">Über PAWDER</Link>
          <a href="javascript:void(0)">Unsere Werte</a>
          <a href="javascript:void(0)">Nachhaltigkeit</a>
        </div>
        <div>
          <div className="footer-link-title">Shop</div>
          <Link to="/shop">Produkte</Link>
          <a href="javascript:void(0)">Snacks</a>
          <a href="javascript:void(0)">Trockenfutter</a>
          <a href="javascript:void(0)">Nassfutter</a>
        </div>
        <div>
          <div className="footer-link-title">Infos</div>
          <Link to="/contact">Kontakt</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/shipping">Lieferung</Link>
        </div>
        <div>
          <div className="footer-link-title">Service</div>
          <a href="javascript:void(0)">Newsletter</a>
          <a href="javascript:void(0)">Rücksendungen</a>
          <a href="javascript:void(0)">Händlersuche</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="javascript:void(0)"><img src="/footer/instagram.svg" alt="Instagram" /></a>
        <a href="javascript:void(0)"><img src="/footer/facebook.svg" alt="Facebook" /></a>
        <a href="javascript:void(0)"><img src="/footer/tiktok.svg" alt="TikTok" /></a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2024 PAWDER GmbH</span>
      <Link to="/impressum">Impressum</Link>
      <a href="javascript:void(0)">AGB</a>
      <a href="javascript:void(0)">Datenschutz</a>
    </div>
  </footer>
);

export default Footer;
