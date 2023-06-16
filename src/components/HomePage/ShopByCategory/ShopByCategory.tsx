import { FC } from 'react';
import './ShopByCategory.scss';
import Phones from './pictures/Phones.png';
import Tablets from './pictures/Phones (1).png';
import Accessories from './pictures/Phones (2).png';

export const ShopByCategory: FC = () => {
  // const BASE_URL = 'https://server-store-p1t7.onrender.com';

  const categories = [
    {
      title: 'Mobile phones',
      subtitle: '95 models',
      img: Phones,
      // img: `${BASE_URL}/img/category-phones.png`,
    },
    {
      title: 'Tablets',
      subtitle: '24 models',
      img: Tablets,
      // img: `${BASE_URL}/img/category-tablets.png`,
    },
    {
      title: 'Accessories',
      subtitle: '100 models',
      img: Accessories,
      // img: `${BASE_URL}/img/category-accessories.png`,
    },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Shop by category</h2>

      <div className="categories grid">
        {categories.map(({ title, subtitle, img }, index) => (
          <div className={`category grid__item--desktop-${24 - 8 * (categories.length - index)}`}>
            <img
              className="category-picture"
              src={img}
              alt={title}
            />

            <h3 className="category-title">{title}</h3>

            <p className="category-subtitle">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
