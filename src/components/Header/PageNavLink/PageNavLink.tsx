import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: FC<Props> = memo(({ to, text }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => (
        classNames('nav-header__link', { 'is-active': isActive })
      )
    }
  >
    {text}
  </NavLink>
));
