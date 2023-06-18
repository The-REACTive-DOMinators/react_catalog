import { useEffect, useState } from 'react';
import { Device } from '../../types/Device';
import './CartPage.scss';
import { CartItem } from './CartItem';

const getCartItemsFromLS = (): Device[] => {
  const cartItemsData = localStorage.getItem('cartItems');

  return cartItemsData ? JSON.parse(cartItemsData) : [];
};

const getTotalPriceFromLS = () => {
  const cartItemsData = localStorage.getItem('cartItems');

  if (cartItemsData) {
    const cartItems = JSON.parse(cartItemsData);

    const totalPrice = cartItems
      .reduce((sum: number, item: Device) => sum + item.price, 0);

    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    return totalPrice;
  }

  return 0;
};

function countPhonesFromLS() {
  const cartItemsData = localStorage.getItem('cartItems');

  if (!cartItemsData) {
    return 0;
  }

  return JSON.parse(cartItemsData).length;
}

export const CartPage = () => {
  const [cartItemsState, setCartItemsState] = useState(getCartItemsFromLS());
  const [totalPriceState, setTotalPriceState] = useState(getTotalPriceFromLS());
  const [countItems, setCountItems] = useState(countPhonesFromLS());

  useEffect(() => {
    setTotalPriceState(getTotalPriceFromLS());
    setCountItems(countPhonesFromLS());
  }, [totalPriceState, countItems]);

  const handleRemove = (itemId: number | string) => {
    const updatedCartItems = cartItemsState.filter(
      (item: Device) => +item.id !== itemId,
    );

    const updatedTotalPrice = getTotalPriceFromLS();

    setCartItemsState(updatedCartItems);
    setTotalPriceState(updatedTotalPrice);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('totalPrice', updatedTotalPrice.toString());
  };

  const handleCountPlus = (itemId: number | string): void => {
    const updatedCartItem = cartItemsState.find(item => +item.id === itemId);

    if (updatedCartItem) {
      const updatedCartItems = [...cartItemsState, updatedCartItem];

      const updatedTotalPrice = getTotalPriceFromLS();

      setCartItemsState(updatedCartItems);
      setTotalPriceState(updatedTotalPrice);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      localStorage.setItem('totalPrice', updatedTotalPrice.toString());
    }
  };

  const handleCountMinus = (itemId: number | string): void => {
    const indexToRemove = cartItemsState.findIndex(item => +item.id === itemId);

    if (indexToRemove === -1) {
      return;
    }

    const updatedCartItems = cartItemsState.splice(indexToRemove, 1);

    if (updatedCartItems) {
      const updatedTotalPrice = getTotalPriceFromLS();

      setCartItemsState(updatedCartItems);
      setTotalPriceState(updatedTotalPrice);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      localStorage.setItem('totalPrice', updatedTotalPrice.toString());
    }
  };

  const handleClearCart = () => {
    localStorage.setItem('cartItems', '[]');
  };

  const itemsToRender = cartItemsState.reduce((acc: Device[], obj: Device) => {
    const existingItems = acc
      .find(item => JSON.stringify(item) === JSON.stringify(obj));

    if (!existingItems) {
      acc.push(obj);
    }

    return acc;
  }, []);

  return (
    <div className="cart">
      <button
        type="button"
        onClick={() => window.history.back()}
      >
        Back
      </button>

      <h1>Cart</h1>

      <div className="cart__container">
        <div className="cart__cart-item">
          {itemsToRender.map((phone: Device) => (
            <CartItem
              key={phone.id}
              phone={phone}
              handleRemove={handleRemove}
              totalPrice={totalPriceState}
              handleCountPlus={handleCountPlus}
              handleCountMinus={handleCountMinus}
              setTotalPrice={setTotalPriceState}
            />
          ))}
        </div>

        <div className="cart__total-info">
          <p className="cart__total-sum">{`Total for ${countItems} items`}</p>

          <p className="cart__total-text">{totalPriceState}</p>

          <div className="cart__separate-line" />

          <button
            type="button"
            className="cart__checkout"
            onClick={handleClearCart}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
