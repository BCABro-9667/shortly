import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="left">
          <div className="logo">Shortly</div>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </nav>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;