import { Device } from '../../types/Device';
import './Cart.scss';
import { CartItem } from './CartItem';

const ph = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: '4.7 IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const Cart = () => {
  // const cartItems: Device[] | [] = JSON
  // .parse(localStorage.getItem('cartItems')) || [];
  const cartItems: Device[] = [ph, ph];

  return (
    <>
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

        <div>
          <p>TotalSum</p>

          <p>Total for 3</p>

          <div className="separate-line" />

          <button type="button">Checkout</button>
        </div>
      </div>
    </>
  );
};
