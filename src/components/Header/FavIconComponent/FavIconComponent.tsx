import { FC } from 'react';
import '../styles/main.scss';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';

export const FavIconComponent: FC = () => {
  return (
    <div className="nav-header__item icon">
      <FavoriteIcon className="header__icon" />
    </div>
  );
};
