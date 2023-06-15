import { FC } from 'react';
import cn from 'classnames';
import './ButtonWithIcon.scss';

interface Props {
  children: React.ReactNode;
  onHandleClick: () => void;
  isSelected: boolean;
}

export const ButtonWithIcon: FC<Props> = ({
  children,
  onHandleClick,
  isSelected,
}) => (
  <button
    type="button"
    onClick={onHandleClick}
    className={cn('icon_button', {
      'icon_button--selected': isSelected,
    })}
  >
    { children }
  </button>
);
