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
import { BreadCrumbs } from './BreadCrumbs/BreadCrumbs';
import { GoBack } from '../GoBack/GoBack';
import './Product.scss';

export const Product: FC = () => {
  const [
    phoneDescription,
    setPhoneDescription,
  ] = useState<PhoneDescription>({} as PhoneDescription);
  const { phoneId: initialPhoneId = '' } = useParams();
  const [phoneId, setPhoneId] = useState(initialPhoneId);
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
  const title = phoneId.split('-').join(' ');

  function getSelectedColor() {
    const color = phoneId?.split('-')[phoneId.split('-').length - 1];

    setSelectedColor(color);

    return color;
  }

  function getSelectedCapacity() {
    const pattern = /(\d+)gb/;
    const capacity = phoneId.match(pattern)?.[1];

    if (capacity) {
      setSelectedCapacity(capacity);
    }

    return capacity || '';
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
    setPhoneId(initialPhoneId);
  }, [initialPhoneId]);

  useEffect(() => {
    getPhoneById(phoneId);
    setSelectedColor(getSelectedColor());
    setSelectedCapacity(getSelectedCapacity());
  }, [phoneId, selectedColor, selectedCapacity]);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [phoneId]);

  return (
    <div className="global-container">
      <BreadCrumbs />
      <GoBack />
      <h1 className="global-container--title">{title}</h1>
      <div className="grid up-section">
        <div className="
        grid__item--desktop-1-12
        grid__item--tablet-1-7
        grid__item-1-4
        "
        >
          <PhotosBlock images={images} />

        </div>

        <div className="
        grid__item-1-4
        grid__item--desktop-14-20
        grid__item--tablet-8-12
        "
        >
          <PhoneCardParams
            colors={phoneDescription.colorsAvailable}
            capacities={phoneDescription.capacityAvailable}
            SelectedColor={selectedColor}
            SelectedCapacity={selectedCapacity}
            phoneId={phoneId}
            onChangeSelectedColor={setSelectedColor}
            onChangeSelectedCapacity={setSelectedCapacity}
          />

          <AddToCardSection
            newPrice={fullPrice}
            oldPrice={price}
            phoneSpecs={chars}
            phoneId={phoneId}
            phoneDescription={phoneDescription}
          />

        </div>
      </div>
      <Description
        loadedDescription={summary}
        phoneSpecs={techSpecDescription}
      />
      <Recomended phoneId={phoneId} />
    </div>
  );
};
