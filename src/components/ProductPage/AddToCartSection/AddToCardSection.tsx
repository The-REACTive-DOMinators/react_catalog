/* eslint-disable quote-props */
import { FC } from 'react';
import './AddToCardSection.scss';
import { AddButton } from '../../AddButton';
import { FavoriteIcon } from '../../../icons/FavoriteIcon';
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

  return (
    <div className="container">
      <div className="price">
        <h3 className="new-price">{`$ ${newPrice}`}</h3>

        <p className="old-price">{`$ ${oldPrice}`}</p>
      </div>

      <div className="add-section">
        <div className="add-to-cart">
          <AddButton handleAddToCart={() => { }} isAdd={false}>
            Add to cart
          </AddButton>
        </div>

        <div className="favourite">
          <FavoriteIcon />
        </div>
      </div>

      <SpecMap phoneSpecs={newPhoneSpecs} />
    </div>
  );
};
