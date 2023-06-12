import cn from 'classnames';
import { useCallback, useState } from 'react';
import './AddToCartButton.scss';

export const AddToCartButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const onHandleClick = useCallback(() => {
    setIsSelected(!isSelected);
  }, []);

  return (
    <button
      type="button"
      className={cn('card__add_button', {
        'card__add_button--selected': isSelected,
      })}
      onClick={onHandleClick}
    >
      {isSelected ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};
