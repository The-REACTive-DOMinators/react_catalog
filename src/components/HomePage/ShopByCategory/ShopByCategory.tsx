import { FC } from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';

export const ShopByCategory: FC = () => {
  const categories = [
    {
      title: 'mobile phones',
      subtitle: '95 models',
      img: `${process.env.REACT_APP_BASE_URL}/img/category-phones.png`,
    },
    {
      title: 'tablets',
      subtitle: '24 models',
      img: `${process.env.REACT_APP_BASE_URL}/img/category-tablets.png`,
    },
    {
      title: 'accessories',
      subtitle: '100 models',
      img: `${process.env.REACT_APP_BASE_URL}/img/category-accessories.png`,
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
