import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../../castomHooks/useLocalSrorage';
import { ShoppingCartIcon } from '../../../icons/ShoppingCartIcon';
import '../styles/main.scss';
import './CartIconComponent.scss';

export const CartIconComponent = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCartItems(cartItems);
    setCount(cartItems.length);
  }, [cartItems, count]);

  return (
    <div className="icon-counter__container">
      <div className="nav-header__item icon">
        <ShoppingCartIcon className="header__icon" />
      </div>

      {count > 0 && (
        <div className="icon-counter__counter">
          <span className="icon-counter__label">{count}</span>
        </div>
      )}
    </div>
  );
};
