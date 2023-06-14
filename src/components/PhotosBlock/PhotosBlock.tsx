/* eslint-disable no-console */
/* eslint-disable max-len */
import { useState } from 'react';
// import { Device } from '../../types/Device';

export const PhotosBlock = () => {
  // const [phones, setPhones] = useState<Device[] | null>(null);
  const [selectedItem, setSelectedItem] = useState('');

  // const API = 'https://server-store-p1t7.onrender.com';

  const plug = [{
    id: 1,
    url: 'https://fakeimg.pl/120x120/014d16/909090?text=test',
  },
  {
    id: 2,
    url: 'https://fakeimg.pl/400x400/00108c/909090?text=test+2',
  },
  {
    id: 3,
    url: 'https://fakeimg.pl/600x600/6cf57e/909090?text=test+3',
  },
  {
    id: 4,
    url: 'https://fakeimg.pl/80x80/fafa12/909090?text=4',
  },
  {
    id: 5,
    url: 'https://fakeimg.pl/80x80/fa9d12/909090?text=5',
  },
  ];

  return (
    <>
      <h1>Photo block</h1>

      <div className="photo-block">
        <div className="photo-block__list">
          {plug.map((item) => (
            <button
              className="photo-block__list__item"
              type="button"
              onClick={() => setSelectedItem(item.url)}
            >
              <img
                src={item.url}
                alt={(item.id).toString()}
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
