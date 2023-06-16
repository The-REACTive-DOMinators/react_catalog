import { useState } from 'react';
import { Device } from '../../types/Device';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { ButtonWithIcon } from '../ButtonWithIcon';
import { ProductCard } from '../ProductCard';
import { ArrowRight } from '../../icons/ArrowRight';

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
          <h2 className="product-slider__header__title">You may also like</h2>

          <div className="product-slider__buttons">
            <div className="product-slider__buttons__button">
              <ButtonWithIcon
                onHandleClick={() => leftButton()}
                isSelected={false}
              >
                <ArrowLeft />
              </ButtonWithIcon>
            </div>

            <div className="product-slider__buttons__button">
              <ButtonWithIcon
                onHandleClick={() => rightButton()}
                isSelected={false}
              >
                <ArrowRight />
              </ButtonWithIcon>
            </div>
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
