import { FC } from 'react';
import './AddButton.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  onHandleClick: () => void;
  isAdd: boolean;
}

export const AddButton: FC<Props> = ({
  onHandleClick,
  children,
  isAdd,
}) => (
  <button
    type="button"
    onClick={onHandleClick}
    className={cn('add_button', {
      'add_button--selected': isAdd,
    })}
  >
    { children }
  </button>
);
