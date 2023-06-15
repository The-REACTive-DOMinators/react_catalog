import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Description } from './Description/Description';
import { PhotosBlock } from './PhotosBlock/PhotosBlock';
import { getPhoneDescription } from '../../api/phones';
import { Summary } from '../../types/Summary';

export const Product: FC = () => {
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
      const phoneDescription = await getPhoneDescription(id);

      window.console.log(phoneDescription);
      setImages(phoneDescription.images);
      setSummary(phoneDescription.description);

      return phoneDescription;
    } catch (error) {
      window.console.log(error);

      return null;
    }
  }

  useEffect(() => {
    if (phoneId) {
      getPhoneById(phoneId);
    }
  }, []);

  return (
    <>
      <PhotosBlock images={images} />
      <Description descriptionObj={summary} />
    </>
  );
};
