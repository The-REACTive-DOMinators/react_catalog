import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../icons/Logo';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';
import { MenuIcon } from '../../icons/MenuIcon';
import { PageNavLink } from '../PageNavLink/PageNavLink';

export const Header: FC = () => (
  <header className="header">
    <div className="header__menu">
      <LogoIcon className="header__logo" />

      <nav className="header__nav">
        <ul className="nav-header">
          <li className="nav-header__item">
            <PageNavLink to="/" text="Home" />
          </li>

          <li className="nav-header__item">
            <PageNavLink to="/phones" text="Phones" />
          </li>

          <li className="nav-header__item">
            <PageNavLink to="/tablets" text="Tablets" />
          </li>
          <li className="nav-header__item">
            <PageNavLink to="/accessories" text="Accessories" />
          </li>
        </ul>
      </nav>
    </div>

    <div className="header__icons">
      <NavLink to="/favorites" className="header__fav icon">
        <FavoriteIcon
          className="header__icon"
        />
      </NavLink>

      <NavLink to="/cart" className="header__cart icon">
        <ShoppingCartIcon
          className="header__icon"
        />
      </NavLink>
    </div>

    <div className="header__burger-menu">
      <NavLink to="/menu" className="header__cart icon">
        <MenuIcon className="header__icon" />
      </NavLink>
    </div>
  </header>
);
