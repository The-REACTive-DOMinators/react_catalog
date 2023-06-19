import { FC } from 'react';
import './PhoneCardParams.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  colors: string[];
  capacities: string[];
  SelectedColor: string;
  SelectedCapacity: string;
  phoneId: string;
}

export const PhoneCardParams: FC<Props> = ({
  colors = [],
  capacities = [],
  SelectedColor,
  SelectedCapacity,
  phoneId,
}) => {
  function getPhoneColor(id: string, color: string) {
    const splittedId = id.split('-');
    const withoutColor = splittedId.slice(0, splittedId.length - 1).join('-');
    const newUrl = `${withoutColor}-${color}`;

    return `/phones/${newUrl}`;
  }

  function getPhoneCapacity(id: string, capacity: string) {
    const splittedId = id.split('-');
    const withoutCapacity = splittedId
      .slice(0, splittedId.length - 2).join('-');
    const newUrl = `${withoutCapacity}-${capacity.toLowerCase()}-${SelectedColor}`;

    return `/phones/${newUrl}`;
  }

  function getProperColor(color: string) {
    if (color === 'midnightgreen') {
      return '#004953';
    }

    if (color === 'spacegray') {
      return '#3c3c43';
    }

    if (color === 'rosegold') {
      return '#b76e79';
    }

    return color;
  }

  return (
    <div className="params-sections">
      <div className="params-section">
        <h4 className="params-section__title">Available colors</h4>
        <div className="section">
          {colors.map(color => (
            <div
              className={cn('button-container',
                { 'active-color': SelectedColor === color })}
              key={color}
            >
              <Link
                to={getPhoneColor(phoneId, color)}
                relative="path"
                style={{ background: getProperColor(color) }}
                className="button"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="params-section">
        <h4 className="params-section__title">Select capacity</h4>
        <div className="section">
          {capacities.map((capacity) => (
            <Link
              to={getPhoneCapacity(phoneId, capacity)}
              relative="path"
              className={cn('capacity',
                {
                  'active-capacity':
                  SelectedCapacity === capacity,
                })}
              key={capacity}
            >
              {capacity}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
