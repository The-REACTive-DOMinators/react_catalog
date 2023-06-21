import './styles/main.scss';
import { Link, NavLink } from 'react-router-dom';
import { FC } from 'react';
import { LogoIcon } from '../../icons/Logo';
import { MenuIcon } from '../../icons/MenuIcon';
import { PageNavLink } from './PageNavLink/PageNavLink';
import { CartIconComponent } from './CartIconComponent/CartIconComponent';

import { PageNavLinkIcon } from './PageNavLinkIcon/PageNavLinkIcon';
import { FavIconComponent } from './FavIconComponent/FavIconComponent';

export const Header: FC = () => (
  <header className="header">
    <div className="header__menu">
      <Link to="/">
        <LogoIcon className="header__logo" />
      </Link>

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
      <PageNavLinkIcon to="/favorites" icon={<FavIconComponent />} />

      <PageNavLinkIcon to="/cart" icon={<CartIconComponent />} />
    </div>

    <div className="header__burger-menu">
      <NavLink to="/menu" className="header__cart">
        <MenuIcon />
      </NavLink>
    </div>
  </header>
);
