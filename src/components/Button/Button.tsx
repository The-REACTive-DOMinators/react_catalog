import {
  FC,
  ReactElement,
} from 'react';
import './Button.scss';
// import cn from 'classnames';

interface Props {
  content: string | ReactElement;
  onHandleClick: () => void;
}

export const Button: FC<Props> = ({
  content,
  onHandleClick,
}) => {
  return (
    <button
      type="button"
      onClick={onHandleClick}
      className="button"
    >
      { content }
    </button>
  );
};
