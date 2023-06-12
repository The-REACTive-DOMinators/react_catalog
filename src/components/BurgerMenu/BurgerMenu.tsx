import { useState, FC } from 'react';
import './BurgerMenu.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { LogoIcon } from '../../icons/Logo';
import { CloseIcon } from '../../icons/CloseIcon';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

export const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn('burger-menu', { open: isOpen })}>
      <div className="header">
        <div className="logo">
          <NavLink to="/home" className="logo-image">
            <LogoIcon className="logo-image-img" />
          </NavLink>
        </div>
        <div
          className="close-icon"
        >
          <NavLink to="/home" onClick={toggleMenu} className="close-icon-img">
            <CloseIcon />
          </NavLink>
        </div>
      </div>
      <div className="nav">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/phones" className="nav-link">Phones</NavLink>
        <NavLink to="/tablets" className="nav-link">Tablets</NavLink>
        <NavLink to="/accessories" className="nav-link">Accessories</NavLink>
      </div>
      <div className="footer">
        <div className="footer-container footer-container-fav">
          <NavLink to="/favorites">
            <FavoriteIcon className="footer-container_icon" />
          </NavLink>
        </div>
        <div className="footer-container">
          <NavLink to="/bucket">
            <ShoppingCartIcon className="footer-container_icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
