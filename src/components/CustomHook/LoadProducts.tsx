import {
  useState,
  useEffect,
} from 'react';
import { Device } from '../../types/Device';
import { getProductSection } from '../../api/phones';

export const useLoadProduct = (url: string) => {
  const [products, setProduct] = useState<Device[]>([]);

  const loadRecomendedProducts = async () => {
    try {
      setProduct(await getProductSection(url));
    } catch {
      throw new Error();
    }
  };

  useEffect(() => {
    loadRecomendedProducts();
  }, []);

  return products;
};
