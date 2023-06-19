/* eslint-disable max-len */
import { FC } from 'react';
import './NotFoundPage.scss';
import { NavLink } from 'react-router-dom';
import icon from './CaveManIcon.svg';

export const NotFound: FC = () => {
  return (
    <div className="pageNotFound">
      <div className="container-page">
        <div className="pageNotFound__message">
          <h1>
            Oops!... Page Not Found
          </h1>
        </div>
        <div className="container-page--button_container">
          <NavLink
            className="container-page--button"
            type="button"
            to="/"
          >
            Go Back!
          </NavLink>
        </div>
        <div>
          <img
            src={icon}
            alt=""
            className="image"
          />
        </div>
      </div>
    </div>
  );
};
