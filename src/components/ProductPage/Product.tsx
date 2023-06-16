import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotosBlock } from './PhotosBlock/PhotosBlock';
import { getPhoneDescription } from '../../api/phones';
import { Summary } from '../../types/Summary';
import { Description } from './Description/Description';
import { DeviceSpecs } from '../../types/DeviceSpecs';
import { Recomended } from './RecomendedBlock/Recomended';

export const Product: FC = () => {
  const [
    phoneDescription,
    setPhoneDescription,
  ] = useState<DeviceSpecs>({} as DeviceSpecs);
  const [images, setImages] = useState(['']);
  const [summary, setSummary] = useState<Summary['description']>([
    {
      title: '',
      text: [''],
    },
  ]);
  const { phoneId } = useParams();

  async function getPhoneById(id: string) {
    try {
      const phoneDescript = await getPhoneDescription(id);

      window.console.log(phoneDescription);
      setPhoneDescription(phoneDescript);
      setImages(phoneDescript.images);
      setSummary(phoneDescript.description);

      return phoneDescription;
    } catch (error) {
      window.console.log(error);

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

  window.console.log(techSpecDescription);

  useEffect(() => {
    if (phoneId) {
      getPhoneById(phoneId);
    }
  }, []);

  return (
    <>
      <PhotosBlock images={images} />
      <Description
        loadedDescription={summary}
        phoneSpecs={techSpecDescription}
      />
      <Recomended phoneId={phoneId} />
    </>
  );
};
