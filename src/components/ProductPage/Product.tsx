import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotosBlock } from './PhotosBlock/PhotosBlock';
import { getPhoneDescription } from '../../api/phones';
import { Summary } from '../../types/Summary';
import { Description } from './Description/Description';
import { Recomended } from './RecomendedBlock/Recomended';
import { PhoneCardParams } from './PhoneCardParams/PhoneCardParams';
import { PhoneDescription } from '../../types/PhoneDescription';
import { AddToCardSection } from './AddToCartSection/AddToCardSection';

export const Product: FC = () => {
  const [
    phoneDescription,
    setPhoneDescription,
  ] = useState<PhoneDescription>({} as PhoneDescription);
  const [images, setImages] = useState(['']);
  const [price, setPrice] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);
  const [summary, setSummary] = useState<Summary['description']>([
    {
      title: '',
      text: [''],
    },
  ]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const { phoneId = '' } = useParams();

  function getSelectedColor() {
    const color = phoneId?.split('-')[phoneId.split('-').length - 1];

    if (color) {
      setSelectedColor(color);
    }

    return color;
  }

  function getSelectedCapacity() {
    const pattern = /(\d+)gb/;
    const capacity = phoneId?.match(pattern)?.[1];

    if (capacity) {
      setSelectedCapacity(capacity);
    }

    return capacity;
  }

  async function getPhoneById(id: string) {
    try {
      const phoneDescript = await getPhoneDescription(id);

      setPhoneDescription(phoneDescript);
      setImages(phoneDescript.images);
      setSummary(phoneDescript.description);
      setPrice(phoneDescript.priceRegular);
      setFullPrice(phoneDescript.priceDiscount);

      return phoneDescription;
    } catch (error) {
      return null;
    }
  }

  const {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phoneDescription;
  const techSpecDescription = {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  };
  const chars = {
    screen,
    resolution,
    processor,
    ram,
  };

  useEffect(() => {
    if (phoneId) {
      getPhoneById(phoneId);
      getSelectedColor();
      getSelectedCapacity();
    }
  }, [phoneId]);

  return (
    <>
      <PhotosBlock images={images} />
      <PhoneCardParams
        colors={phoneDescription.colorsAvailable}
        capacities={phoneDescription.capacityAvailable}
        SelectedColor={selectedColor}
        SelectedCapacity={selectedCapacity}
        phoneId={phoneId}
      />
      <AddToCardSection
        newPrice={fullPrice}
        oldPrice={price}
        phoneSpecs={chars}
      />
      <Description
        loadedDescription={summary}
        phoneSpecs={techSpecDescription}
      />
      <Recomended phoneId={phoneId} />
    </>
  );
};
