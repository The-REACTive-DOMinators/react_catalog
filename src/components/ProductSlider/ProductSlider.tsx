import { useState } from 'react';
import { Recomended } from '../Recomended/Recomended';
import { Device } from '../../types/Device';

const prodCardsPlug: Device[] = [{
  id: '1',
  category: 'string',
  phoneId: 'string',
  name: 'string',
  fullPrice: 1499.99,
  price: 1499,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1984,
  image: 'string',
},
{
  id: '1',
  category: 'string',
  phoneId: 'string',
  name: 'string',
  fullPrice: 1499.99,
  price: 1499,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1984,
  image: 'string',
},
{
  id: '1',
  category: 'string',
  phoneId: 'string',
  name: 'string',
  fullPrice: 1499.99,
  price: 1499,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1984,
  image: 'string',
},
{
  id: '1',
  category: 'string',
  phoneId: 'string',
  name: 'string',
  fullPrice: 1499.99,
  price: 1499,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1984,
  image: 'string',
},
// {
//   id: '1',
//   category: 'string',
//   phoneId: 'string',
//   name: 'string',
//   fullPrice: 1499.99,
//   price: 1499,
//   screen: 'string',
//   capacity: 'string',
//   color: 'string',
//   ram: 'string',
//   year: 1984,
//   image: 'string',
// },
// {
//   id: '1',
//   category: 'string',
//   phoneId: 'string',
//   name: 'string',
//   fullPrice: 1499.99,
//   price: 1499,
//   screen: 'string',
//   capacity: 'string',
//   color: 'string',
//   ram: 'string',
//   year: 1984,
//   image: 'string',
// },
// {
//   id: '1',
//   category: 'string',
//   phoneId: 'string',
//   name: 'string',
//   fullPrice: 1499.99,
//   price: 1499,
//   screen: 'string',
//   capacity: 'string',
//   color: 'string',
//   ram: 'string',
//   year: 1984,
//   image: 'string',
// },
// {
//   id: '1',
//   category: 'string',
//   phoneId: 'string',
//   name: 'string',
//   fullPrice: 1499.99,
//   price: 1499,
//   screen: 'string',
//   capacity: 'string',
//   color: 'string',
//   ram: 'string',
//   year: 1984,
//   image: 'string',
// }
];

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
    <div className="container">
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
      </div>

      <Recomended products={prodCardsPlug} />
    </div>
  );
};
