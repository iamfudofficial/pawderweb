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
    <nav className="navbar">
      {/* Linke Seite - Shop Button */}
      <div className="navbar-left">
        <Link to="/shop" className="navbar-shop-btn" onClick={closeMenu}>
          Shop
        </Link>
      </div>
      
      {/* Mittig - Logo */}
      <div className="navbar-logo">
        <img src="/logo/WhatsApp Image 2025-04-27 at 09.58.57-Photoroom.png" alt="Pawder Logo" className="pawder-logo-img" />
      </div>
      
      {/* Rechte Seite - Warenkorb */}
      <div className="navbar-right">
        <Link to="/shop" className="navbar-cart-btn" onClick={closeMenu}>
          🛒
        </Link>
      </div>
      
      {/* Hamburger Menu Button für Mobile */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      
      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/shop" onClick={closeMenu}>Produkte</Link></li>
        <li><Link to="/story" onClick={closeMenu}>Geschichte</Link></li>
        <li><Link to="/quality" onClick={closeMenu}>Qualität</Link></li>
        <li><Link to="/about" onClick={closeMenu}>Über uns</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
