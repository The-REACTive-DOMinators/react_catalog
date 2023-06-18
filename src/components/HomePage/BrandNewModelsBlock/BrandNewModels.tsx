import {
  FC,
} from 'react';
import { ProductSlider } from '../../ProductSlider/ProductSlider';
import { useLoadProduct } from '../../CustomHook/LoadProducts';

export const BrandNewModels: FC = () => {
  const newModels = useLoadProduct('newest');

  return (
    <div className="recomended">
      <ProductSlider
        products={newModels}
        title="Brand new models"
      />
    </div>
  );
};
