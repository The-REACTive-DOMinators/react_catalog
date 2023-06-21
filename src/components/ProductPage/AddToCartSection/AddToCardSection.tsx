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
  id: string;
}

function isItemInCart(id: string) {
  const data = localStorage.getItem('cartItems');

  if (data) {
    const cartItems = JSON.parse(data);

    return cartItems
      .some((item: any) => item.phoneId === id);
  }

  return false;
}

function isItemInFavorite(id: string) {
  const data = localStorage.getItem('favorite');

  if (data) {
    const cartItems = JSON.parse(data);

    return cartItems
      .some((item: any) => item.phoneId === id);
  }

  return false;
}

export const AddToCardSection: FC<Props> = ({
  phoneSpecs,
  newPrice,
  oldPrice,
  id,
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

  const [isFavorite, setisFavorite] = useState(isItemInFavorite(id));
  const [isAdd, setIsAdd] = useState(isItemInCart(id));

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
        <div className="button-add-to-cart_container">
          <AddButton
            handleAddToCart={handleAddToCart}
            isAdd={isAdd}
          >
            {isAdd
              ? 'Added to cart'
              : 'Add to cart'}

          </AddButton>
        </div>

        <div className="button-with-icon_container">
          <ButtonWithIcon
            onHandleClick={handleFavorite}
            isSelected={isFavorite}
          >
            {isFavorite
              ? <FavoriteFullIcon />
              : <FavoriteIcon />}
          </ButtonWithIcon>
        </div>
      </div>

      <SpecMap phoneSpecs={newPhoneSpecs} />
    </div>
  );
};
