import { FC } from 'react';
import { Device } from '../../../types/Device';
import { Counter } from '../Counter';
import './CartItem.scss';

interface Props {
  phone: Device;
}

export const CartItem: FC<Props> = ({ phone }) => (
  <div className="cart-item">
    <div className="cart-item__info">
      <button type="button" className="cart-item__close-button">
        *
      </button>

      <img
        src="/"
        alt="phone.name"
        className="cart-item__image_containner"
      />

      <h1 className="cart-item__title">{phone.name}</h1>
    </div>

    <div className="cart-item__counter">
      <Counter />
    </div>
  </div>
);
