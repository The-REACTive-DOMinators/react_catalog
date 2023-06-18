/* eslint-disable quote-props */
import { FC, useCallback, useState } from 'react';
import './AddToCardSection.scss';
import { AddButton } from '../../AddButton';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';
import { Chars } from './Chars';
import { ButtonWithIcon } from '../../ButtonWithIcon';
import { FavoriteFullIcon } from '../../../icons/FavouriteFullIcon';

interface Props {
  chars: Chars;
  newPrice: number;
  oldPrice: number;
}

export const AddToCardSection: FC<Props> = ({ chars, newPrice, oldPrice }) => {
  const [isFavorite, setisFavorite] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const specNames = Object.keys(chars);

  const handleAddToCart = useCallback(() => {
    setIsAdd(!isAdd);
  }, [isAdd]);

  const handleFavorite = useCallback(() => {
    setisFavorite(!isFavorite);
  }, [isFavorite]);

  return (
    <div className="container">
      <div className="price">
        <h3 className="new-price">{`$${newPrice}`}</h3>

        <p className="old-price">{`$${oldPrice}`}</p>
      </div>

      <div className="add-section">
        <AddButton
          handleAddToCart={handleAddToCart}
          isAdd={isAdd}
        >
          {isAdd
            ? 'Added to cart'
            : 'Add to cart'}

        </AddButton>

        <ButtonWithIcon
          onHandleClick={handleFavorite}
          isSelected={isFavorite}
        >
          {isFavorite
            ? <FavoriteFullIcon />
            : <FavoriteIcon />}
        </ButtonWithIcon>
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
