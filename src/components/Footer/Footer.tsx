import { FC } from 'react';
import './styles/main.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../Icons/Logo.svg';
import arrow from '../../Icons/Arrow.svg';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <img
        src={logo}
        alt="logo"
        className="footer__logo"
      />

      <nav className="footer__nav nav-footer">
        <ul className="nav-footer__list">
          <li className="nav-footer__item">
            <NavLink
              to="/Github"
              className={
                ({ isActive }) => (
                  classNames('nav-footer__link', { 'is-active': isActive })
                )
              }
            >
              Github
            </NavLink>
          </li>
          <li className="nav-footer__item">
            <NavLink
              to="/Contacts"
              className={
                ({ isActive }) => (
                  classNames('nav-footer__link', { 'is-active': isActive })
                )
              }
            >
              Contacts
            </NavLink>
          </li>
          <li className="nav-footer__item">
            <NavLink
              to="/Rights"
              className={
                ({ isActive }) => (
                  classNames('nav-footer__link', { 'is-active': isActive })
                )
              }
            >
              Rights
            </NavLink>
          </li>
        </ul>
      </nav>
      <button type="submit" onClick={scrollToTop} className="back-top">
        Back to Top

        <img
          src={arrow}
          alt="arrow"
          className="footer__arrow"
        />
      </button>

    </footer>
  );
};
