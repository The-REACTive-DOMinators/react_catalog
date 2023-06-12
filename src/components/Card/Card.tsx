import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Device } from '../../types/Device';
import './Card.scss';
import { FavoriteButton } from '../FavoriteButton';
import { AddToCartButton } from '../AddToCartButton';

interface Props {
  phone: Device;
}

export const Card: FC<Props> = memo(({ phone }) => {
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

        <div className="card__char">
          <p className="card__char--category_name"> RAM </p>

          <p>{ram}</p>
        </div>

        <div className="card__buttons">
          <AddToCartButton />

          <FavoriteButton />
        </div>
      </div>
    </div>
  );
});
