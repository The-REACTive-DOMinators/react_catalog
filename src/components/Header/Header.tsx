import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../Icons/Logo.svg';
import favIco from '../../Icons/Favourites.svg';
import CartIco from '../../Icons/Cart.svg';
import MenuIco from '../../Icons/Burger.svg';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <img
            src={logo}
            alt="logo"
            className="header__logo"
            id="Top"
          />

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
          <div className="header__fav icon">
            <img
              src={favIco}
              alt="Favourite"
              className="header__img"
            />
          </div>

          <div className="header__cart icon">
            <img
              src={CartIco}
              alt="Stroke"
              className="header__img"
            />
          </div>
        </div>

        <div className="header__burger-menu">
          <img
            src={MenuIco}
            alt="Menu"
            className="header__img"
          />
        </div>
      </header>
    </>
  );
};
