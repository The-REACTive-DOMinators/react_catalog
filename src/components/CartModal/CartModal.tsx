import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonWithIcon } from '../ButtonWithIcon';
import './CartModal.scss';

interface Props {
  setIsCheckout: (isCheck: boolean) => void;
}

export const CartModal: FC<Props> = ({ setIsCheckout }) => {
  const onHandleClick = () => {
    setIsCheckout(false);
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal__overlay" />
      <div className="cart-modal__content">
        <p className="cart-modal__text">
          Congratulations! You have successfully made an order!
        </p>
        <Link to="/">
          <div className="cart-modal__button">
            <ButtonWithIcon
              onHandleClick={onHandleClick}
            >
              Go home
            </ButtonWithIcon>
          </div>
        </Link>
      </div>
    </div>
  );
};
