import {
  FC,
} from 'react';
import { ProductSlider } from '../../ProductSlider/ProductSlider';
import { useLoadProduct } from '../../CustomHook/LoadProducts';

export const HotPricesModels: FC = () => {
  const hotPricesModels = useLoadProduct('hot-prices');

  return (
    <div className="recomended">
      <ProductSlider products={hotPricesModels} title="Hot prices" />
    </div>
  );
};
