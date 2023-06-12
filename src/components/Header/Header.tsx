import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../Icons/LogoIco';
import { FavoriteIcon } from '../../Icons/FavoriteIcon';
import { ShoppingCartIcon } from '../../Icons/ShoppingCartIcon';
import { MenuIco } from '../../Icons/MenuIco';
import { PageNavLink } from '../PageNavlink/PageNavLink';

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
              className="header__img"
            />
          </NavLink>

          <NavLink to="/Cart" className="header__cart icon">
            <ShoppingCartIcon
              className="header__img"
            />
          </NavLink>
        </div>

        <div className="header__burger-menu">
          <NavLink to="/menu" className="header__cart icon">
            <MenuIco className="header__img" />
          </NavLink>
        </div>
      </header>
    </>
  );
};
