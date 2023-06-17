import {
  FC,
  memo,
} from 'react';
import { ProductSlider } from '../../ProductSlider/ProductSlider';
import { useLoadProduct } from '../../CustomHook/LoadProducts';

interface Props {
  phoneId: string | undefined;
}

export const Recomended: FC<Props> = memo(({ phoneId }) => {
  const recommendedProducts = useLoadProduct(`products/phones/${phoneId}/recommended`);

  return (
    <div className="recomended">
      <ProductSlider products={recommendedProducts} title="You may also like" />
    </div>
  );
});
