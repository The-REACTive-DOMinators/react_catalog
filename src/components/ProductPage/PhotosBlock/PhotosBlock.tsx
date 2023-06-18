import { useState } from 'react';

interface Props {
  images: string[];
}

export const PhotosBlock: React.FC<Props> = ({ images }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const URL = process.env.REACT_APP_BASE_URL;

  return (
    <div className="photo-block">
      <div className="photo-block__list">
        {images.map((image, index) => (
          <button
            className="photo-block__list__item"
            type="button"
            onClick={() => setSelectedItemIndex(index)}
          >
            <img
              src={`${URL}/${image}`}
              alt="phone"
              className="photo-block__list__item__img"
            />
          </button>
        ))}
      </div>

      <div className="photo-block__selectedItem">
        <img
          src={`${URL}/${images[selectedItemIndex]}`}
          alt="phone"
          className="photo-block__list__item__img
          photo-block__list__item__img--active"
        />
      </div>
    </div>
  );
};
