/* eslint-disable quote-props */
import { FC } from 'react';
import './AddToCardSection.scss';
import { AddButton } from '../../AddButton';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';
import { Chars } from './Chars';

interface Props {
  chars: Chars;
  newPrice: string;
  oldPrice: string;
}

export const AddToCardSection: FC<Props> = ({ chars, newPrice, oldPrice }) => {
  const specNames = Object.keys(chars);

  return (
    <div className="container">
      <div className="price">
        <h3 className="new-price">{newPrice}</h3>

        <p className="old-price">{oldPrice}</p>
      </div>

      <div className="add-section">
        <div className="add-to-cart">
          <AddButton onHandleClick={() => { }} isAdd={false}>
            Add to cart
          </AddButton>
        </div>

        <div className="favourite">
          <FavoriteIcon />
        </div>
      </div>

      {specNames.map((key) => (
        <section className="char" key={key}>
          <p className="name">{key}</p>
          <p className="value">{chars[key as keyof Chars]}</p>
        </section>
      ))}
    </div>
  );
};
