import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../icons/Logo';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';
import { MenuIcon } from '../../icons/MenuIcon';
import { PageNavLink } from '../PageNavLink/PageNavLink';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <LogoIcon className="header__logo" />

          <nav className="header__nav">
            <ul className="nav-header">
              <li className="nav-header__item">
                <PageNavLink to="/Home" text="Home" />
              </li>

              <li className="nav-header__item">
                <PageNavLink to="/Phones" text="Phones" />
              </li>

              <li className="nav-header__item">
                <PageNavLink to="/Tablets" text="Tablets" />
              </li>
              <li className="nav-header__item">
                <PageNavLink to="/Accessories" text="Accessories" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__icons">
          <NavLink to="/Favourite" className="header__fav icon">
            <FavoriteIcon
              className="header__icon"
            />
          </NavLink>

          <NavLink to="/Cart" className="header__cart icon">
            <ShoppingCartIcon
              className="header__icon"
            />
          </NavLink>
        </div>

        <div className="header__burger-menu">
          <NavLink to="/menu" className="header__cart icon">
            <MenuIcon className="header__img" />
          </NavLink>
        </div>
      </header>
    </>
  );
};
