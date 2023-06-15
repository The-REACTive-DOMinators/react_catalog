import { Device } from '../../types/Device';
import { Card } from '../Card';

type Props = {
  products: Device[];
};

export const Recomended: React.FC<Props> = ({ products }) => {
  return (
    <div className="recomended">
      <div className="recomended__block">
        {products.map((card) => (
          <Card phone={card} />
        ))}
      </div>
    </div>
  );
};
