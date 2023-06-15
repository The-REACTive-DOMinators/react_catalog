import { useState } from 'react';

interface Props {
  images: string[];
}

export const PhotosBlock: React.FC<Props> = ({ images }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const BASE_URL = 'https://server-store-p1t7.onrender.com';

  return (
    <>
      <h1>Photo block</h1>

      <div className="photo-block">
        <div className="photo-block__list">
          {images.map((image) => (
            <button
              className="photo-block__list__item"
              type="button"
              onClick={() => setSelectedItem(image)}
            >
              <img
                src={`${BASE_URL}${image}`}
                alt="phone"
                className="photo-block__list__item__img"
              />
            </button>
          ))}
        </div>

        <div className="photo-block__selectedItem">
          <img
            src={selectedItem}
            alt="phone"
            className="photo-block__list__item__img"
          />
        </div>
      </div>
    </>
  );
};
