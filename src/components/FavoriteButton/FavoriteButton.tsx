import { useCallback, useState } from 'react';
import cn from 'classnames';
import './FavoriteButton.scss';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { FavoriteFullIcon } from '../../icons/FavouriteFullIcon';

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onHandleClick = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, []);

  return (
    <button
      type="button"
      className={cn('card__favorite_button', {
        'card__favorite_button--selected': isFavorite,
      })}
      onClick={onHandleClick}
    >
      {isFavorite
        ? <FavoriteFullIcon />
        : <FavoriteIcon />}
    </button>
  );
};
