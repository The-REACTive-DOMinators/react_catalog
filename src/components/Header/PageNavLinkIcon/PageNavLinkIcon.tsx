import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  icon: {};
}

export const PageNavLinkIcon: FC<Props> = memo(({ to, icon }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => (
        classNames('link-header-icon', { 'is-active': isActive })
      )
    }
  >
    {icon}
  </NavLink>
));
