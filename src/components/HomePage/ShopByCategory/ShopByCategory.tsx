import { FC } from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';

export const ShopByCategory: FC = () => {
  return (
    <div className="container-categories">
      <div className="section-categories">
        <h2 className="title-categories">Shop by category</h2>

        <div className="categories grid">
          <Link to="/phones">
            <div
              className="
                category-categories_section
                grid__item--desktop-1-8
                grid__item--tablet-1-4
                grid__item-1-4
              "
            >
              <div className="picture-container-categories">
                <img
                  className="category-categories_section-picture"
                  alt="tablets"
                />
              </div>
              <h3 className="category-categories_section-title">tablets</h3>

              <p className="category-categories_section-subtitle">24 models</p>
            </div>
          </Link>

          <Link to="/tablets">
            <div
              className="
                category-categories_section
                grid__item--desktop-9-16
                grid__item--tablet-5-8
                grid__item-1-4
              "
            >
              <div className="picture-container-categories">
                <img
                  className="category-categories_section-picture"
                  alt="mobile phones"
                />
              </div>
              <h3 className="category-categories_section-title">
                mobile phones
              </h3>

              <p className="category-categories_section-subtitle">95 models</p>
            </div>
          </Link>

          <Link to="/accessories">
            <div
              className="
                category-categories_section
                grid__item--desktop-17-24
                grid__item--tablet-9-12
                grid__item-1-4
              "
            >
              <div className="picture-container-categories">
                <img
                  className="category-categories_section-picture"
                  alt="accessories"
                />
              </div>
              <h3 className="category-categories_section-title">accessories</h3>

              <p className="category-categories_section-subtitle">100 models</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
