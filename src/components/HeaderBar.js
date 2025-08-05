import React from 'react';
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="headerbar">
      <div className="headerbar-left">
        <input className="headerbar-search" type="text" placeholder="Suchbegriff" />
      </div>
      <div className="headerbar-center">
        <img 
          src="/logo/WhatsApp Image 2025-04-27 at 09.58.57-Photoroom.png" 
          alt="PAWDER Logo" 
          className="headerbar-logo"
        />
      </div>
      <div className="headerbar-right">
        <img src="https://flagcdn.com/de.svg" alt="DE" className="headerbar-flag" />
        <a href="#cart" className="headerbar-cart" title="Warenkorb">
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill="#a66cff"/>
            <path d="M7.5 7.5H16L15 14H8.5L7.5 7.5Z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
            <circle cx="9.5" cy="16" r="1" fill="#fff"/>
            <circle cx="14" cy="16" r="1" fill="#fff"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeaderBar;
