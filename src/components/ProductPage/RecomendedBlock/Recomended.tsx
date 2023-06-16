import {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ProductSlider } from '../../ProductSlider/ProductSlider';
import { getRecomendedPhones } from '../../../api/phones';
import { Device } from '../../../types/Device';

interface Props {
  phoneId: string | undefined;
}

export const Recomended: FC<Props> = memo(({ phoneId }) => {
  const [recommendedProducts, setRecomendedProducts] = useState<Device[]>([]);

  const loadRecomendedProducts = useCallback(async () => {
    try {
      if (phoneId) {
        const recommended = await getRecomendedPhones(phoneId);

        setRecomendedProducts(recommended);
      }
    } catch {
      throw new Error();
    }
  }, []);

  useEffect(() => {
    loadRecomendedProducts();
  }, []);

  return (
    <div className="recomended">
      <ProductSlider recommendedProducts={recommendedProducts} />
    </div>
  );
});
