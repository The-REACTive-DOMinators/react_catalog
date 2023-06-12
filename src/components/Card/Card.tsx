import { FC, useState } from 'react';
import cn from 'classnames';
import { Device } from '../../types/Device';
import './Card.scss';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { FavoriteFullIcon } from '../../icons/FavouriteFullIcon';

interface Props {
  phone: Device;
}

export const Card: FC<Props> = ({ phone }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    phoneId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    // color,
    ram,
    // year,
    image,
  } = phone;

  const onHandleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card__container">
      <div className="card__content">
        <a href="/" className="card__link">
          <div className="card__photo_container">
            <img
              src={image}
              alt={phoneId}
              className="card__image"
            />
          </div>
        </a>

        <a href="/" className="card__phone_link">
          {name}
        </a>

        <div className="card__price">
          <p className="card__price--fullPrice">
            &#36;
            {price}
          </p>
          <p className="card__price--discountPrise">
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

        <div className="card__char">
          <p className="card__char--category_name"> RAM </p>
          <p>{ram}</p>
        </div>

        <div className="card__buttons">
          <button
            type="button"
            className={cn('card__add_button', {
              'card__add_button--selected': isSelected,
            })}
            onClick={() => setIsSelected(!isSelected)}
          >
            {isSelected ? 'Added to cart' : 'Add to cart'}
          </button>

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
        </div>
      </div>
    </div>
  );
};
