import {
  FC, memo, useCallback, useState,
} from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Device } from '../../types/Device';
import './Card.scss';
import { Button } from '../Button';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { FavoriteFullIcon } from '../../icons/FavouriteFullIcon';

interface Props {
  phone: Device;
}

export const Card: FC<Props> = memo(({ phone }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAdd = useCallback(() => {
    setIsAdd(!isAdd);
  }, [isAdd]);

  const handleFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  const {
    phoneId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  return (
    <div className="card__container">
      <div className="card__content">
        <Link to="/" className="card__link">
          <div className="card__photo_container">
            <img
              src={image}
              alt={phoneId}
              className="card__image"
            />
          </div>
        </Link>

        <Link to="/" className="card__phone_link">
          {name}
        </Link>

        <div className="card__price">
          <p className="card__price--fullPrice">
            &#36;
            {price}
          </p>

          <p className="card__price--discountPrice">
            <del>
              &#36;
              {fullPrice}
            </del>
          </p>
        </div>

        <div className="card__separate-line" />

        <div className="card__char">
          <p className="card__char--category_name"> Screen </p>

          <p>{screen}</p>
        </div>

        <div className="card__char">
          <p className="card__char--category_name"> Capacity </p>

          <p>{capacity}</p>
        </div>

        <div className="card__char card__char--last">
          <p className="card__char--category_name"> RAM </p>

          <p>{ram}</p>
        </div>

        <div className="card__buttons">
          <div className={cn('add_button', {
            'add_button--selected': isAdd,
          })}
          >
            <Button
              onHandleClick={handleAdd}
              content={isAdd
                ? 'Added to cart'
                : 'Add to cart'}
            />
          </div>

          <div className={cn('favorite_button', {
            'favorite_button--selected': isFavorite,
          })}
          >
            <Button
              onHandleClick={handleFavorite}
              content={isFavorite
                ? <FavoriteFullIcon />
                : <FavoriteIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
