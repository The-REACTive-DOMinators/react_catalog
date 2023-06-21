import { useLocalStorage } from '../../castomHooks/useLocalStorageTS';
import { ProductCard } from '../../components/ProductCard';
// eslint-disable-next-line max-len
import { BreadCrumbs } from '../../components/ProductPage/BreadCrumbs/BreadCrumbs';
import { Device } from '../../types/Device';
import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const [favoriteItems] = useLocalStorage('favorite', []);

  return (
    <div className="favorites__container">
      <BreadCrumbs />
      <h1 className="favorites__title">
        Favorites
      </h1>
      <p className="favorites__count">
        {`${favoriteItems.length} items`}
      </p>
      <div className="favorites__list">
        {favoriteItems.map((phone: Device) => (
          <ProductCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};
