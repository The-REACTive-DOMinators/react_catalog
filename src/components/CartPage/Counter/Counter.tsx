/* eslint-disable */

import { FC, useState } from 'react';
import { MinusIcon } from '../../../icons/MinusIcon';
import { PlusIcon } from '../../../icons/PlusIcon';
import { Device } from '../../../types/Device';
import { ButtonWithIcon } from '../../ButtonWithIcon';
import './Counter.scss';

interface Props {
  phone: Device;
}

export const Counter: FC<Props> = ({ phone }) => {
  const [isActive] = useState(false);
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div className="counter__buttons">
        <div className="counter__icon">
          <ButtonWithIcon
            onHandleClick={decrementCount}
            isSelected={!isActive}
          >
            <MinusIcon />
          </ButtonWithIcon>
        </div>
        <span className="">{count}</span>
        <div className="counter__icon">
          <ButtonWithIcon
            onHandleClick={incrementCount}
            isSelected={isActive}
          >
            <PlusIcon />
          </ButtonWithIcon>
        </div>
      </div>
      <span className="counter__price">
        &#36;
        {phone.price * count}
      </span>
    </div>
  );
};

