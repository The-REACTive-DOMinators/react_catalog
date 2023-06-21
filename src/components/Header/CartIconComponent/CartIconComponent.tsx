import { FC } from 'react';
import { ShoppingCartIcon } from '../../../icons/ShoppingCartIcon';
import '../styles/main.scss';

export const CartIconComponent: FC = () => {
  return (
    <div className="nav-header__item icon">
      <ShoppingCartIcon className="header__icon" />
    </div>
  );
};
