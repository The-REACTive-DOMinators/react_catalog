import { FC } from 'react';
import { ShopByCategory } from './ShopByCategory/ShopByCategory';
import { BrandNewModels } from './BrandNewModelsBlock';
import { HotPricesModels } from './HotPricesModelsBlock/HotPricesModels';

export const Home: FC = () => (
  <>
    <BrandNewModels />
    <ShopByCategory />
    <HotPricesModels />
  </>
);
