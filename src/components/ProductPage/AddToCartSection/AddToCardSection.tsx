/* eslint-disable quote-props */
import { FC, useCallback, useState } from 'react';
import './AddToCardSection.scss';
import { AddButton } from '../../AddButton';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';
import { ButtonWithIcon } from '../../ButtonWithIcon';
import { FavoriteFullIcon } from '../../../icons/FavouriteFullIcon';
import { SpecMap } from '../SpecMap/SpecMap';
import { DeviceSpecsShort } from './DeviceSpecsShort';

interface Props {
  phoneSpecs: DeviceSpecsShort;
  newPrice: number;
  oldPrice: number;
}

export const AddToCardSection: FC<Props> = ({
  phoneSpecs,
  newPrice,
  oldPrice,
}) => {
  const {
    screen,
    resolution,
    processor,
    ram,
  } = phoneSpecs;

  const newPhoneSpecs = {
    screen,
    resolution,
    processor,
    ram,
  };

  const [isFavorite, setisFavorite] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const handleAddToCart = useCallback(() => {
    setIsAdd(!isAdd);
  }, [isAdd]);

  const handleFavorite = useCallback(() => {
    setisFavorite(!isFavorite);
  }, [isFavorite]);

  return (
    <div className="container">
      <div className="price">
        <h3 className="new-price">{`$ ${newPrice}`}</h3>

        <p className="old-price">{`$ ${oldPrice}`}</p>
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

      <SpecMap phoneSpecs={newPhoneSpecs} />
    </div>
  );
};
