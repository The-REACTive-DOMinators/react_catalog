import { FC } from 'react';
import './styles/main.scss';
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
                <a href="#!" className="nav-bar__link">Home</a>
              </li>
              <li className="nav-bar__item">
                <a href="#!" className="nav-bar__link">Phones</a>
              </li>
              <li className="nav-bar__item">
                <a href="#!" className="nav-bar__link">Tablets</a>
              </li>
              <li className="nav-bar__item">
                <a href="#!" className="nav-bar__link">Accessories</a>
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
