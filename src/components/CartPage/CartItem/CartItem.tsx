import { FC, useEffect, useState } from 'react';
import { CloseIcon } from '../../../icons/CloseIcon';
import { MinusIcon } from '../../../icons/MinusIcon';
import { PlusIcon } from '../../../icons/PlusIcon';
import { Device } from '../../../types/Device';
import { ButtonWithIcon } from '../../ButtonWithIcon';
// import { Counter } from '../Counter';
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
        <img
          src={`${process.env.REACT_APP_BASE_URL}/${phone.image}`}
          alt={phone.name}
          className="cart-item__image"
        />
        <h1 className="cart-item__title">{phone.name}</h1>
      </div>

      <div className="cart-item__counter">
        <div className="counter">
          <div className="counter__buttons">
            <div className="counter__icon">
              <ButtonWithIcon
                onHandleClick={decrementCount}
                isSelected={!isActive}
                disabled={count === 1}
              >
                <MinusIcon />
              </ButtonWithIcon>
            </div>
            <span className="">{count}</span>
            <div className="counter__icon">
              <ButtonWithIcon
                onHandleClick={incrementCount}
                isSelected={isActive}
              >
                <PlusIcon />
              </ButtonWithIcon>
            </div>
          </div>
          <span className="counter__price">
            &#36;
            {phone.price * count}
          </span>
        </div>
      </div>
    </div>
  );
};
