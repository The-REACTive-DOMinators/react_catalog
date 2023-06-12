import { FC } from 'react';
import './styles/main.scss';
import { Arrow } from '../../Icons/Arrow';
import { LogoIcon } from '../../Icons/LogoIco';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <LogoIcon className="footer__logo" />

      <nav className="footer__nav nav-footer">
        <ul className="nav-footer__list">
          <li className="nav-footer__item">
            <a href="!#" className="nav-footer__link">
              Github
            </a>
          </li>

          <li className="nav-footer__item">
            <a href="!#" className="nav-footer__link">
              Contacts
            </a>
          </li>

          <li className="nav-footer__item">
            <a href="!#" className="nav-footer__link">
              Rights
            </a>
          </li>
        </ul>
      </nav>
      <button type="submit" onClick={scrollToTop} className="back-top">
        Back to Top
        <Arrow className="footer__arrow" />
      </button>

    </footer>
  );
};
