import {
  FC,
  memo,
  useCallback,
  // useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { Device } from '../../types/Device';
import './ProductCard.scss';
import { AddButton } from '../AddButton';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { FavoriteFullIcon } from '../../icons/FavouriteFullIcon';
import { ButtonWithIcon } from '../ButtonWithIcon';

interface Props {
  phone: Device;
}

export const ProductCard: FC<Props> = memo(({ phone }) => {
  const [isFavorite, setisFavorite] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  // useEffect(() => {
  //   const existingCartItems = JSON
  //     .parse(localStorage.getItem('cartItems')) || [];

  //   if (isAdd) {
  //     const updatedCartItems = [...existingCartItems, phone];

  //     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  //   }
  // }, [isAdd]);

  const handleAddToCart = useCallback(() => {
    setIsAdd(!isAdd);
  }, [isAdd]);

  const handleFavorite = useCallback(() => {
    setisFavorite(!isFavorite);
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

  const BASE_URL = 'https://server-store-p1t7.onrender.com';

  return (
    <div className="card__container">
      <div className="card__content">
        <Link to={`/phones/${phoneId}`} className="card__link">
          <div className="card__photo_container">
            <img
              src={`${BASE_URL}/${image}`}
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
          <AddButton
            handleAddToCart={handleAddToCart}
            isAdd={isAdd}
          >
            {isAdd
              ? 'Added to cart'
              : 'Add to cart'}

          </AddButton>

          <ButtonWithIcon
            onHandleClick={handleFavorite}
            isSelected={isFavorite}
          >
            {isFavorite
              ? <FavoriteFullIcon />
              : <FavoriteIcon />}
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
});
