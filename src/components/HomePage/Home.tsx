import { FC } from 'react';
import { ShopByCategory } from './ShopByCategory/ShopByCategory';
import { BrandNewModels } from './BrandNewModelsBlock';
import { HotPricesModels } from './HotPricesModelsBlock/HotPricesModels';
import Slider from '../Slider/Slider';

export const Home: FC = () => (
  <>
    <Slider />
    <BrandNewModels />
    <ShopByCategory />
    <HotPricesModels />
  </>
);
