/* eslint-disable no-console */
import { useEffect, FC, useState } from 'react';
import { Phone } from '../../../types/Phone';
import { getPhones } from '../../../api/phones';

export const Phones: FC = () => {
  const [phoneData, setPhoneData] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPhoneData = async () => {
      try {
        const data = await getPhones();

        setPhoneData(data);
        setIsLoading(false);

        console.log(data);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchPhoneData();
  }, [setPhoneData, setIsLoading, setHasError]);

  return (
    <>
      <div>
        {phoneData.map((phone) => (
          <div key={phone.id}>{phone.name}</div>
        ))}
        {isLoading}
        {hasError}
      </div>
    </>
  );
};
