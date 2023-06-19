import { FC } from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';
import { Arrow } from '../../icons/Arrow';
import { LogoIcon } from '../../icons/Logo';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <Link to="/home">
        <LogoIcon className="footer__logo" />
      </Link>

      <nav className="footer__nav nav-footer">
        <ul className="nav-footer__list">
          <li className="nav-footer__item">
            <a
              href="!#"
              className="nav-footer__link"
              target="_blank"
            >
              Github
            </a>
          </li>

          <li className="nav-footer__item">
            <a
              href="!#"
              className="nav-footer__link"
              target="_blank"
            >
              Contacts
            </a>
          </li>

          <li className="nav-footer__item">
            <a
              href="!#"
              className="nav-footer__link"
              target="_blank"
            >
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
