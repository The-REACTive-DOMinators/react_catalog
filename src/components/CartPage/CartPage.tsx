import { useEffect, useState } from 'react';
import { Device } from '../../types/Device';
import './CartPage.scss';
import { CartItem } from './CartItem';
import { useLocalStorage } from '../../castomHooks/useLocalSrorage';
import { GoBack } from '../GoBack/GoBack';
import { CartModal } from '../CartModal';

export const CartPage = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [totalPrice, setTotalPrice] = useLocalStorage('totalPrice', 0);
  const [countItems, setCountItems] = useState(cartItems.length);
  const [isCheckout, setIsCheckout] = useState(false);

  const getTotalPrice = () => {
    if (cartItems.length > 0) {
      const updateTotalPrice = cartItems
        .reduce((sum: number, item: Device) => sum + item.price, 0);

      return updateTotalPrice;
    }

    return 0;
  };

  const handleRemove = (itemId: string) => {
    setCartItems((prevCartItems: Device[]) => {
      const updatedCartItems = prevCartItems.filter(
        (item: Device) => +item.id !== +itemId,
      );
      const updateTotalPrice = updatedCartItems
        .reduce((sum: number, item: Device) => sum + item.price, 0);

      setTotalPrice(updateTotalPrice);
      setCountItems(updatedCartItems.length);

      return updatedCartItems;
    });
  };

  const handleCountPlus = (itemId: string): void => {
    setCartItems((prevCartItems: Device[]) => {
      const updatedCartItem = prevCartItems
        .find((item: Device) => +item.id === +itemId);

      if (updatedCartItem) {
        const updatedCartItems = [...prevCartItems, updatedCartItem];
        const updatedTotalPrice = updatedCartItems
          .reduce((sum: number, item: Device) => sum + item.price, 0);

        setTotalPrice(updatedTotalPrice);
        setCountItems(updatedCartItems.length);

        return updatedCartItems;
      }

      return prevCartItems;
    });
  };

  const handleCountMinus = (itemId: string): void => {
    setCartItems((prevCartItems: Device[]) => {
      const indexToRemove = prevCartItems
        .reverse()
        .findIndex((item: Device) => +item.id === +itemId);

      if (indexToRemove === -1) {
        return prevCartItems;
      }

      const updatedCartItems = prevCartItems
        .filter((_: unknown, index: number) => index !== indexToRemove)
        .reverse();
      const updatedTotalPrice = updatedCartItems
        .reduce((sum: number, item: Device) => sum + item.price, 0);

      setTotalPrice(updatedTotalPrice);
      setCountItems(updatedCartItems.length);

      return updatedCartItems;
    });
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    setCartItems([]);
    setTotalPrice(0);
    setCountItems(0);
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
      <GoBack />

      <h1 className="cart__title">Cart</h1>

      <div className="cart__container">
        {cartItems.length < 1
          ? (
            <p className="cart__empty">
              Cart is empty
            </p>
          )
          : (
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
          )}

        <div className="cart__total-info">
          <p className="cart__total-sum">
            &#36;
            {totalPrice}
          </p>

          <p className="cart__total-text">{`Total for ${countItems} items`}</p>

          <div className="cart__separate-line" />

          <button
            type="button"
            className="cart__checkout"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>

        {isCheckout
          && <CartModal setIsCheckout={setIsCheckout} />}
      </div>
    </div>
  );
};
