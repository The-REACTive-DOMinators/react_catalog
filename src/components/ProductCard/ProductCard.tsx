import {
  FC,
  memo,
  useCallback,
  useEffect,
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
const getCartItemsFromLS = () => {
  const data = localStorage.getItem('cartItems');

  return data
    ? JSON.parse(data)
    : [];
};

const getFavoriteItemsFromLS = () => {
  const data = localStorage.getItem('favorite');

  return data
    ? JSON.parse(data)
    : [];
};

const hasCardInLocalCart = (id: string) => {
  const existingCartItems = getCartItemsFromLS() || [];
  const isCardCart = existingCartItems
    .find((item: Device) => item.id === id);

  return !!isCardCart;
};

const hasCardInLocalFavor = (id: string) => {
  const existingFavoriteItems = getFavoriteItemsFromLS() || [];
  const isCardFavor = existingFavoriteItems
    .find((item: Device) => item.id === id);

  return !!isCardFavor;
};

export const ProductCard: FC<Props> = memo(({ phone }) => {
  const [isAdd, setIsAdd] = useState(hasCardInLocalCart(phone.id));
  const [isFavorite, setisFavorite] = useState(hasCardInLocalFavor(phone.id));

  useEffect(() => {
    const existingCartItems = getCartItemsFromLS() || [];

    if (isAdd && !hasCardInLocalCart(phone.id)) {
      const updatedCartItems = [...existingCartItems, phone];

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    if (!isAdd && hasCardInLocalCart(phone.id)) {
      const updatedCartItems = existingCartItems.filter(
        (item: Device) => item.id !== phone.id,
      );

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  }, [isAdd]);

  useEffect(() => {
    const existingFavoriteItems = getFavoriteItemsFromLS() || [];

    if (isFavorite && !hasCardInLocalFavor(phone.id)) {
      const updatedCartItems = [...existingFavoriteItems, phone];

      localStorage.setItem('favorite', JSON.stringify(updatedCartItems));
    }

    if (!isFavorite && hasCardInLocalFavor(phone.id)) {
      const updatedCartItems = existingFavoriteItems.filter(
        (item: Device) => item.id !== phone.id,
      );

      localStorage.setItem('favorite', JSON.stringify(updatedCartItems));
    }
  }, [isFavorite]);

  const handleAddToCart = useCallback(() => {
    setIsAdd(!isAdd);
  }, [isAdd]);
  const handleFavorite = useCallback(() => {
    setisFavorite(!isFavorite);
  }, [isFavorite]);

  // window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <Link to={`/phones/${phoneId}`} className="card__link">
          <div className="card__photo_container">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${image}`}
              alt={phoneId}
              className="card__image"
            />
          </div>
        </Link>
        <Link to={`/phones/${phoneId}`} className="card__phone_link">
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
          <div className="add-to-cart-button">
            <AddButton
              handleAddToCart={handleAddToCart}
              isAdd={isAdd}
            >
              {isAdd
                ? 'Added to cart'
                : 'Add to cart'}
            </AddButton>
          </div>

          <div className="card__button-container">
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
    </div>
  );
});
