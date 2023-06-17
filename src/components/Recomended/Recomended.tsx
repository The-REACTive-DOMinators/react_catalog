import { Device } from '../../types/Device';
import { ProductCard } from '../ProductCard';

type Props = {
  products: Device[];
};

export const Recomended: React.FC<Props> = ({ products }) => {
  return (
    <div className="recomended">
      <div className="recomended__block">
        {products.map((card) => (
          <ProductCard phone={card} />
        ))}
      </div>
    </div>
  );
};
