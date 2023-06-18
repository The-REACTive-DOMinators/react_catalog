import { FC, useState } from 'react';
import { CloseIcon } from '../../../icons/CloseIcon';
import { MinusIcon } from '../../../icons/MinusIcon';
import { PlusIcon } from '../../../icons/PlusIcon';
import { Device } from '../../../types/Device';
import { ButtonWithIcon } from '../../ButtonWithIcon';
// import { Counter } from '../Counter';
import './CartItem.scss';

interface Props {
  phone: Device;
  handleRemove: (itemId: number | string) => void;
  totalPrice: number,
  setTotalPrice: (diff: number) => void;
  handleCountPlus: (itemId: number | string) => void;
  handleCountMinus: (itemId: number | string) => void;
}

const BASE_URL = 'https://server-store-p1t7.onrender.com';

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
    setCount(currentCount => currentCount - 1);
    setTotalPrice(totalPrice - phone.price);
    handleCountMinus(phone.id);
  };

  const incrementCount = () => {
    setCount(currentCount => currentCount + 1);
    setTotalPrice(totalPrice + phone.price);
    handleCountPlus(phone.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          type="button"
          className="cart-item__close-button"
          onClick={() => handleRemove(+phone.id)}
        >
          <CloseIcon className="cart-item__close" />
        </button>
        <img
          src={`${BASE_URL}/${phone.image}`}
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
        {/* <Counter
          phone={phone}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          handleCountChange={handleCountChange}
        /> */}
      </div>
    </div>
  );
};
