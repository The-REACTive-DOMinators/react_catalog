import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';
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
          />

          <nav className="header__nav">
            <ul className="nav-bar">
              <li className="nav-bar__item">
                <NavLink to="/Home" className="nav__link">
                  Home
                </NavLink>
              </li>

              <li className="nav-bar__item">
                <NavLink to="/Phones" className="nav__link">
                  Phones
                </NavLink>
              </li>

              <li className="nav-bar__item">
                <NavLink to="/Tablets" className="nav__link">
                  Tablets
                </NavLink>
              </li>

              <li className="nav-bar__item">
                <NavLink to="/Accessories" className="nav__link">
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
