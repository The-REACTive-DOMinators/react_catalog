/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, FC, useState } from 'react';
import { Phone } from '../../../types/Phone';
import { client } from '../../../services/fetchPhones';

export const Phones: FC = () => {
  const [phoneData, setPhoneData] = useState<Phone[]>([]); // Используем ваш интерфейс Phone
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPhoneData = async () => {
      try {
        const data = await client.get<Phone[]>('/phones');

        setPhoneData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchPhoneData();
  }, []);

  // Дополнительный код вашего компонента, использующий состояния phoneData, isLoading и hasError

  return (
    <></>
  );
};
