import { FC } from 'react';
import cn from 'classnames';
import './ButtonWithIcon.scss';

interface Props {
  children: React.ReactNode;
  onHandleClick: () => void;
  isSelected: boolean;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}

export const ButtonWithIcon: FC<Props> = ({
  children,
  onHandleClick,
  isSelected,
  disabled = false,
}) => (
  <button
    type="button"
    onClick={onHandleClick}
    className={cn('icon_button', {
      'icon_button--selected': isSelected,
      'icon_button--disabled': disabled,
    })}
    disabled={disabled}
  >
    { children }
  </button>
);
