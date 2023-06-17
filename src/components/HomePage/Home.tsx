import { FC } from 'react';
import { BrandNewModels } from './BrandNewModelsBlock';
import { HotPricesModels } from './HotPricesModelsBlock/HotPricesModels';

export const Home: FC = () => (
  <>
    <BrandNewModels />
    <HotPricesModels />
  </>
);
