import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar pawder-navbar">
      {/* Linke Seite - Shop Button */}
      <div className="navbar-left">
        <Link to="/shop" className="navbar-shop-btn premium-btn" onClick={closeMenu}>
          Shop
        </Link>
      </div>
      
      {/* Mittig - Logo */}
      <div className="navbar-logo">
        <img src="/logo/WhatsApp Image 2025-04-27 at 09.58.57-Photoroom.png" alt="Pawder Logo" className="pawder-logo-img premium-logo" />
      </div>
      
      {/* Rechte Seite - Warenkorb */}
      <div className="navbar-right">
        <Link to="/shop" className="navbar-cart-btn premium-cart" onClick={closeMenu}>
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">0</span>
        </Link>
      </div>
      
      {/* Hamburger Menu Button für Mobile */}
      <button className={`hamburger-menu premium-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay premium-menu ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="menu-header">
            <h3>Navigation</h3>
            <button className="close-menu" onClick={closeMenu}>✕</button>
          </div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className={`navbar-links premium-menu-items ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">🏠</span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">🛍️</span>
            <span>Produkte</span>
          </Link>
        </li>
        <li>
          <Link to="/story" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">📖</span>
            <span>Geschichte</span>
          </Link>
        </li>
        <li>
          <Link to="/quality" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">⭐</span>
            <span>Qualität</span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">ℹ️</span>
            <span>Über uns</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu} className="menu-item">
            <span className="menu-icon">📞</span>
            <span>Kontakt</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
