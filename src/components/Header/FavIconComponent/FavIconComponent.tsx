import '../styles/main.scss';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../../castomHooks/useLocalSrorage';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';
import './FavIconComponent.scss';

export const FavIconComponent = () => {
  const [favoriteItems] = useLocalStorage('favorite', []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(favoriteItems.length);
  }, [count]);

  return (
    <div className="icon-counter__container">
      <div className="nav-header__item icon">
        <FavoriteIcon className="header__icon" />
      </div>

      {count > 0 && (
        <div className="icon-counter__counter">
          <span className="icon-counter__label">{count}</span>
        </div>
      )}
    </div>
  );
};
