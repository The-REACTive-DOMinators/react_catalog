import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotosBlock } from './PhotosBlock/PhotosBlock';
import { getPhoneDescription } from '../../api/phones';
import { Summary } from '../../types/Summary';
import { Description } from './Description/Description';
import { DeviceSpecs } from '../../types/DeviceSpecs';

export const Product: FC = () => {
  const [
    deviceSpecs,
    setDeviceSpecs,
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
      const phoneDescription = await getPhoneDescription(id);

      window.console.log(phoneDescription);
      setDeviceSpecs(phoneDescription);
      setImages(phoneDescription.images);
      setSummary(phoneDescription.description);

      return phoneDescription;
    } catch (error) {
      window.console.log(error);

      return null;
    }
  }

  const startKey = 'screen';
  const endKey = 'cell';
  const slicedDeviceSpecs: DeviceSpecs = Object.entries(deviceSpecs)
    .reduce((acc, [key, value]) => {
      const updatedAcc: DeviceSpecs = { ...acc };

      if (Object.prototype.hasOwnProperty.call(acc, startKey)) {
        if (key !== endKey && key !== startKey) {
          updatedAcc[key as keyof DeviceSpecs] = value;
        }
      } else if (key === startKey || key === endKey) {
        updatedAcc[key as keyof DeviceSpecs] = value;
      }

      return updatedAcc;
    }, {} as DeviceSpecs);

  window.console.log(slicedDeviceSpecs);

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
        phoneSpecs={slicedDeviceSpecs}
      />
    </>
  );
};
