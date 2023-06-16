import { FC } from 'react';
import { CloseIcon } from '../../../icons/CloseIcon';
import { Device } from '../../../types/Device';
import { Counter } from '../Counter';
import './CartItem.scss';

interface Props {
  phone: Device;
}

export const CartItem: FC<Props> = ({ phone }) => {
  // const [isActive, setIsActive] = useState(false);

  // const handleFavorite = useCallback(() => {
  //   setIsActive(!isActive);
  // }, [isActive]);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button type="button" className="cart-item__close-button">
          <CloseIcon className="cart-item__close" />
        </button>
        <img
          src="/"
          alt={phone.name}
          className="cart-item__image"
        />
        <h1 className="cart-item__title">{phone.name}</h1>
      </div>

      <div className="cart-item__counter">
        <Counter phone={phone} />
      </div>
    </div>
  );
};
