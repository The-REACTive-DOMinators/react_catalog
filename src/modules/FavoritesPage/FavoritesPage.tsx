import { NavLink } from 'react-router-dom';
import { useLocalStorage } from '../../castomHooks/useLocalStorageTS';
import { ProductCard } from '../../components/ProductCard';
import { HomeIcon } from '../../icons/HomeIcon';
import { Device } from '../../types/Device';
import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const [favoriteItems] = useLocalStorage('favorite', []);

  return (
    <div className="favorites__container">
      <div>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>

      </div>
      <h1 className="favorites__title">
        Favorites
      </h1>
      <p className="favorites__count">
        {`${favoriteItems.length} items`}
      </p>
      <div className="favorites__list">

        <p>Favorites</p>

      </div>
      <h1>Favorites</h1>
      <div>
        {favoriteItems.map((phone: Device) => (
          <ProductCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};
