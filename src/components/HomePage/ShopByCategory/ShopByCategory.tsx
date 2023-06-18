import { FC } from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';
import Phones from './pictures/Phones.png';
import Tablets from './pictures/Phones (1).png';
import Accessories from './pictures/Phones (2).png';

export const ShopByCategory: FC = () => {
  // const BASE_URL = 'https://server-store-p1t7.onrender.com';

  const categories = [
    {
      title: 'mobile phones',
      subtitle: '95 models',
      img: Phones,
      // img: `${BASE_URL}/img/category-phones.png`,
    },
    {
      title: 'tablets',
      subtitle: '24 models',
      img: Tablets,
      // img: `${BASE_URL}/img/category-tablets.png`,
    },
    {
      title: 'accessories',
      subtitle: '100 models',
      img: Accessories,
      // img: `${BASE_URL}/img/category-accessories.png`,
    },
  ];

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">Shop by category</h2>

        <div className="categories grid">
          {categories.map(({ title, subtitle, img }, index) => (
            <Link to={`/${title.split(' ').length > 1 ? title.split(' ')[1] : title}`} key={title}>
              <div className={
                `category
               grid__item--desktop-${24 - 8 * (categories.length - index)}
              grid__item--tablet-${12 - 4 * (categories.length - index)}`
              }
              >
                <div className="picture-container">
                  <img
                    className="category-picture"
                    src={img}
                    alt={title}
                  />
                </div>
                <h3 className="category-title">{title}</h3>

                <p className="category-subtitle">{subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
