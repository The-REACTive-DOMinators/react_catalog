/* eslint-disable max-len */
import {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';
import { getLength } from '../../../api/phones';

export const ShopByCategory: FC = () => {
  const [phonesCount, setPhonesCount] = useState<null | number>(null);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const PhoneModelsString = phonesCount !== null && phonesCount > 1 ? `${phonesCount} models` : `${phonesCount} model`;

  const loadPhonesLength = useCallback(async () => {
    try {
      const phonesLength = await getLength();

      setPhonesCount(phonesLength);
    } catch (error) {
      setIsLoadingError(true);
    }
  }, []);

  useEffect(
    () => {
      loadPhonesLength();
    },
    [],
  );

  return (
    <div className="container-categories">
      <div className="section-categories">
        <h2 className="title-categories">Shop by category</h2>

        <div className="categories grid-category">
          <div
            className="
              category-categories_section
              grid-category__item--desktop-1-8
              grid-category__item--tablet-1-4
            "
          >
            <div className="picture-container-categories">
              <Link to="/phones">
                <img
                  src="https://server-store-p1t7.onrender.com/img/category-phones.png"
                  className="category-categories_section-picture"
                  alt="mobile phones"
                />
              </Link>
            </div>
            <h3>
              <Link to="/phones" className="category-categories_section-title">
                mobile phones
              </Link>
            </h3>

            <p>
              <Link to="/phones" className="category-categories_section-subtitle">
                {isLoadingError ? <p className="phone-counter-error">something went wrong</p> : PhoneModelsString}
              </Link>
            </p>
          </div>

          <div
            className="
              category-categories_section
              grid-category__item--desktop-9-16
              grid-category__item--tablet-5-8
            "
          >
            <div className="picture-container-categories">
              <Link to="/tablets">
                <img
                  src="https://server-store-p1t7.onrender.com/img/category-tablets.png"
                  className="category-categories_section-picture"
                  alt="tablets"
                />
              </Link>
            </div>

            <h3>
              <Link to="/tablets" className="category-categories_section-title">
                tablets
              </Link>
            </h3>

            <p>
              <Link to="/tablets" className="category-categories_section-subtitle">
                Coming soon
              </Link>
            </p>
          </div>

          <div
            className="
              category-categories_section
              grid-category__item--desktop-17-24
              grid-category__item--tablet-9-12
            "
          >
            <div className="picture-container-categories">
              <Link to="/accessories">
                <img
                  src="https://server-store-p1t7.onrender.com/img/category-accessories.png"
                  className="category-categories_section-picture"
                  alt="accessories"
                />
              </Link>
            </div>
            <h3>
              <Link to="/accessories" className="category-categories_section-title">
                accessories
              </Link>
            </h3>

            <p>
              <Link to="/accessories" className="category-categories_section-subtitle">
                Coming soon
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
