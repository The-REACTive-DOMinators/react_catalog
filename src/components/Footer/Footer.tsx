import { FC } from 'react';
import './styles/main.scss';
import logo from '../../Icons/Logo.svg';
import arrow from '../../Icons/Arrow.svg';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="logo"
        className="footer__logo"
      />

      <nav className="footer__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#!" className="nav__link">Github</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">Contacts</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">rights</a>
          </li>
        </ul>
      </nav>
      <a href="#!" className="footer__back-link">
        <p className="footer__before">Back to top</p>
        <img
          src={arrow}
          alt="arrow"
          className="footer__arrow"
        />
      </a>

    </footer>
  );
};
