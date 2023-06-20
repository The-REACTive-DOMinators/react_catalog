import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { ArrowRight } from '../../icons/ArrowRight';
import { HomeIcon } from '../../icons/HomeIcon';
import { Device } from '../../types/Device';

const getFavoriteItemsFromLS = (): Device[] => {
  const favoriteData = localStorage.getItem('favorite');

  return favoriteData ? JSON.parse(favoriteData) : [];
};

export const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState(getFavoriteItemsFromLS());

  useEffect(() => {
    setFavoriteItems(getFavoriteItemsFromLS());
  }, [favoriteItems]);

  return (
    <div>
      <div>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>

        <ArrowRight />

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
