import { FC } from 'react';
import './PhoneCardParams.scss';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { getSearchWith } from '../../../utils/searchHelper';

interface Props {
  colors: string[];
  capacities: string[];
  SelectedColor: string;
  SelectedCapacity: string;
}

export const PhoneCardParams: FC<Props> = ({
  colors = [],
  capacities = [],
  SelectedColor,
  SelectedCapacity,
}) => {
  const [searchParams] = useSearchParams();

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
                to={{
                  search: getSearchWith(searchParams, { color }),
                }}
                style={{ background: color }}
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
              to={{
                search: getSearchWith(searchParams, { capacity }),
              }}
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
