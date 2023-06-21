/* eslint-disable no-console */
/* eslint-disable max-len */
import { Link, NavLink, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';
import { HomeIcon } from '../../../icons/HomeIcon';
import { ArrowRight } from '../../../icons/ArrowRight';

export const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <div className={`crumb${isLastCrumb ? ' last-crumb' : ''}`} key={crumb}>
          <Link to={currentLink} className={`link ${isLastCrumb ? 'crumb-link' : ''}`}>{crumb}</Link>
          {!isLastCrumb && <ArrowRight />}
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <NavLink to="/" className="home-icon crumb">
        <HomeIcon />
      </NavLink>
      <ArrowRight />
      {crumbs}
    </div>
  );
};
