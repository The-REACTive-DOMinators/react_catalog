import { Device } from '../../types/Device';
import './Cart.scss';
import { CartItem } from './CartItem';

export const Cart = () => {
  // const cartItems: Device[] | [] = JSON
  //   .parse(localStorage.getItem('cartItems')) || [];

  const cartItems: Device[] = [];

  return (
    <div className="cart">
      <button type="button">
        Back
      </button>

      <h1>Cart</h1>

      <div className="cart__container">
        <div className="cart__cart-item">
          {cartItems.map((phone) => (
            <CartItem
              key={phone.id}
              phone={phone}
            />
          ))}
        </div>

        <div className="cart__total-info">
          <p className="cart__total-sum">TotalSum</p>

          <p className="cart__total-text">Total for 3</p>

          <div className="cart__separate-line" />

          <button
            type="button"
            className="cart__checkout"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
