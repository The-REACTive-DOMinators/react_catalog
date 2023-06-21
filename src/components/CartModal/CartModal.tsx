/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './CartModal.scss';
import iconSuccess from './IconSuccess.svg';

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
        <div className="cart-modal__left">
          <div className="cart-modal__text">
            <p>Congratulations! Your payment was successful.</p>
            <p>Thank you for choosing our store.</p>
            <p>Enjoy your new mobile devices and accessories!</p>
          </div>
          <div className="cart-modal__button-container">
            <Link to="/" className="cart-modal__link">
              <button
                className="cart-modal__button"
                type="button"
                onClick={onHandleClick}
              >
                Go home
              </button>
            </Link>
          </div>
        </div>
        <div className="cart-modal__right">
          <div className="cart-modal__img-container">
            <img src={iconSuccess} alt="" className="cart-modal__image" />
          </div>
        </div>
      </div>
    </div>
  );
};
