import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { LogoIcon } from '../../Icons/LogoIco';
import { FavIco } from '../../Icons/FavIco';
import { CartIco } from '../../Icons/CartIco';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <LogoIcon className="header__logo" />

          <nav className="header__nav">
            <ul className="nav-header">
              <li className="nav-header__item">
                <NavLink
                  to="/Home"
                  className={
                    ({ isActive }) => (
                      classNames('nav-header__link', { 'is-active': isActive })
                    )
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-header__item">
                <NavLink
                  to="/Phones"
                  className={
                    ({ isActive }) => (
                      classNames('nav-header__link', { 'is-active': isActive })
                    )
                  }
                >
                  Phones
                </NavLink>
              </li>

              <li className="nav-header__item">
                <NavLink
                  to="/Tablets"
                  className={
                    ({ isActive }) => (
                      classNames('nav-header__link', { 'is-active': isActive })
                    )
                  }
                >
                  Tablets
                </NavLink>
              </li>
              <li className="nav-header__item">
                <NavLink
                  to="/Accessories"
                  className={
                    ({ isActive }) => (
                      classNames('nav-header__link', { 'is-active': isActive })
                    )
                  }
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__icons">
          <NavLink to="/Favourite" className="header__fav icon">
            <FavIco
              className="header__img"
            />
          </NavLink>

          <NavLink to="/Cart" className="header__cart icon">
            <CartIco
              className="header__img"
            />
          </NavLink>
        </div>

        <div className="header__burger-menu">
          <img
            src=""
            alt="Menu"
            className="header__img"
          />
        </div>
      </header>
    </>
  );
};
