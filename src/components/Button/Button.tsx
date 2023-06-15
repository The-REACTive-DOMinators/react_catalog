import {
  FC,
  ReactElement,
} from 'react';
import './Button.scss';

interface Props {
  content: string | ReactElement;
  onHandleClick: () => void;
}

export const Button: FC<Props> = ({
  content,
  onHandleClick,
}) => (
  <button
    type="button"
    onClick={onHandleClick}
    className="button"
  >
    { content }
  </button>
);
