import { useEffect, useState } from 'react';
import { Device } from '../../types/Device';
import './CartPage.scss';
import { CartItem } from './CartItem';
import { useLocalStorage } from '../../castomHooks/useLocalStorageTS';

export const CartPage = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [totalPrice, setTotalPrice] = useLocalStorage('totalPrice', 0);
  const [countItems, setCountItems] = useState(cartItems.length);

  const getTotalPrice = () => {
    if (cartItems.length > 0) {
      const updateTotalPrice = cartItems
        .reduce((sum: number, item: Device) => sum + item.price, 0);

      setTotalPrice(updateTotalPrice);

      return totalPrice;
    }

    return 0;
  };

  const handleRemove = (itemId: string) => {
    const updatedCartItems = cartItems.filter(
      (item: Device) => +item.id !== +itemId,
    );

    setCartItems(updatedCartItems);
    setCountItems(cartItems.length);

    const updatedTotalPrice = getTotalPrice();

    setTotalPrice(updatedTotalPrice);
  };

  const handleCountPlus = (itemId: string): void => {
    const updatedCartItem = cartItems
      .find((item: Device) => +item.id === +itemId);

    if (updatedCartItem) {
      const updatedCartItems = [...cartItems, updatedCartItem];

      setCartItems(updatedCartItems);
      setCountItems(cartItems.length);

      const updatedTotalPrice = getTotalPrice();

      setCartItems(updatedCartItems);
      setTotalPrice(updatedTotalPrice);
    }
  };

  const handleCountMinus = (itemId: string): void => {
    const indexToRemove = cartItems
      .reverse()
      .findIndex((item: Device) => +item.id === +itemId);

    if (indexToRemove === -1) {
      return;
    }

    const updatedCartItems = cartItems
      .filter((_: unknown, index: number) => index !== indexToRemove)
      .reverse();

    if (updatedCartItems) {
      setCartItems(updatedCartItems);
      setCountItems(cartItems.length);

      const updatedTotalPrice = getTotalPrice();

      setTotalPrice(updatedTotalPrice);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    setTotalPrice(getTotalPrice());
    setCountItems(cartItems.length);
  }, []);

  const itemsToRender = cartItems.reduce((acc: Device[], obj: Device) => {
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
              totalPrice={totalPrice}
              handleCountPlus={handleCountPlus}
              handleCountMinus={handleCountMinus}
              setTotalPrice={setTotalPrice}
            />
          ))}
        </div>

        <div className="cart__total-info">
          <p className="cart__total-sum">{`Total for ${countItems} items`}</p>

          <p className="cart__total-text">{totalPrice}</p>

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
