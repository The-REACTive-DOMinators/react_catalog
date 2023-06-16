import { useState } from 'react';
import { Device } from '../../types/Device';
import { ProductCard } from '../ProductCard';

type Props = {
  products: Device[]
};

export const ProductSlider: React.FC<Props> = ({ products }) => {
  const [page, setPage] = useState(1);

  const rightButton = () => {
    let point = page + 1;

    if (point > products.length - 4) {
      point = products.length - 4;
      if (point < 0) {
        point = 0;
      }
    }

    setPage(point);
  };

  const leftButton = () => {
    let point = page - 1;

    if (point < 0) {
      point = 0;
    }

    setPage(point);
  };

  return (
    <div className="container">
      <div className="product-slider">
        <div className="product-slider__header">
          <h2>You may also like</h2>

          <div className="product-slider__buttons">
            <button
              type="button"
              className="product-slider__buttons__button"
              onClick={leftButton}
            >
              {'<'}
            </button>

            <button
              type="button"
              className="product-slider__buttons__button"
              onClick={rightButton}
            >
              {'>'}
            </button>
          </div>
        </div>

        <div className="product-slider__content">
          {products.slice(page, page + 4).map(product => (
            <ProductCard phone={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
