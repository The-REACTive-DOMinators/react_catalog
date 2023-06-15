import { useState } from 'react';
import { Card } from '../Card/Card';

const prodCardsPlug: never[] = [];

export const ProductSlider = () => {
  const [page, setPage] = useState(1);

  const rightButton = () => {
    let point = page + 1;

    if (point > prodCardsPlug.length - 4) {
      point = prodCardsPlug.length - 4;
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
    <>
      <div className="product-slider">
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

        <div className="product-slider__cards">
          {prodCardsPlug.map((card) => (
            <Card phone={card} />
          ))}
        </div>
      </div>
    </>
  );
};
