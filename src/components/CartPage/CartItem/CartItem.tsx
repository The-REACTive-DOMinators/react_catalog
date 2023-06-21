import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CloseIcon } from '../../../icons/CloseIcon';
import { MinusIcon } from '../../../icons/MinusIcon';
import { PlusIcon } from '../../../icons/PlusIcon';
import { Device } from '../../../types/Device';
import { ButtonWithIcon } from '../../ButtonWithIcon';
import './CartItem.scss';

interface Props {
  phone: Device;
  handleRemove: (itemId: string) => void;
  totalPrice: number,
  setTotalPrice: (diff: number) => void;
  handleCountPlus: (itemId: string) => void;
  handleCountMinus: (itemId: string) => void;
}

const countItemFromLS = (itemId: string) => {
  const cartItemsData = localStorage.getItem('cartItems');

  if (cartItemsData) {
    const cartItems = JSON.parse(cartItemsData);

    const countItem: number = cartItems

      .filter((item: { id: string }) => item.id === itemId).length;

    return countItem;
  }

  return 0;
};

export const CartItem: FC<Props> = ({
  phone,
  handleRemove,
  totalPrice,
  setTotalPrice,
  handleCountPlus,
  handleCountMinus,
}) => {
  const [isActive] = useState(false);
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 1) {
      setCount(currentCount => currentCount - 1);
      setTotalPrice(totalPrice - phone.price);
      handleCountMinus(phone.id);
    }
  };

  const incrementCount = () => {
    setCount(currentCount => currentCount + 1);
    setTotalPrice(totalPrice + phone.price);
    handleCountPlus(phone.id);
  };

  useEffect(() => {
    setCount(countItemFromLS(phone.id));
  }, [count]);

  const { phoneId, name, price } = phone;

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          type="button"
          className="cart-item__close-button"
          onClick={() => handleRemove(phone.id)}
        >
          <CloseIcon className="cart-item__close" />
        </button>
        <Link to={`/phones/${phoneId}`}>
          <div className="cart-item__img-container">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${phone.image}`}
              alt={name}
              className="cart-item__image"
            />
          </div>
        </Link>

        <Link
          to={`/phones/${phoneId}`}
          className="cart-item__phone_link"
        >
          <h1 className="cart-item__title">{name}</h1>
        </Link>
      </div>

      <div className="cart__counter">
        <div className="cart__counter_buttons">
          <div
            className={cn('cart__counter_icon',
              { 'cart__counter_icon--minus': count === 1 })}
          >
            <ButtonWithIcon
              onHandleClick={decrementCount}
              isSelected={!isActive}
              disabled={count === 1}
            >
              <MinusIcon />
            </ButtonWithIcon>
          </div>
          <span className="">{count}</span>
          <div className="cart__counter_icon">
            <ButtonWithIcon
              onHandleClick={incrementCount}
              isSelected={isActive}
            >
              <PlusIcon />
            </ButtonWithIcon>
          </div>
        </div>
        <span className="cart__counter_price">
          &#36;
          {price * count}
        </span>
      </div>
    </div>
  );
};
