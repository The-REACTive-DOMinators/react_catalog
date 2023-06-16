import { FC } from 'react';
import './AddButton.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  isAdd: boolean;
  handleAddToCart: () => void;
}

export const AddButton: FC<Props> = ({
  handleAddToCart,
  children,
  isAdd,
}) => (
  <button
    type="button"
    onClick={handleAddToCart}
    className={cn('add_button', {
      'add_button--selected': isAdd,
    })}
  >
    { children }
  </button>
);
