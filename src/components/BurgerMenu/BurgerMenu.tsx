import React, { useState } from 'react';
import './BurgerMenu.scss';
import logo from '../../images1/BurgerLogo.png';
import close from '../../images1/Close.png';
import buttonImage1 from '../../images1/FavoriteIcon.png';
import buttonImage2 from '../../images1/BucketIcon.png';

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="header">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <button type="button" className="close-icon" onClick={toggleMenu}>
          <img src={close} alt="Close Icon" />
        </button>
      </div>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/phones">Phones</a>
        <a href="/tablets">Tablets</a>
        <a href="/accessories">Accessories</a>
      </div>
      <div className="footer">
        <div className="footer-button-container">
          <a href="/favorites">
            <img src={buttonImage1} alt="Button 1" />
          </a>
        </div>
        <div className="footer-button-container">
          <a href="/bucket">
            <img src={buttonImage2} alt="Button 1" />
          </a>
        </div>
      </div>
    </nav>
  );
};
