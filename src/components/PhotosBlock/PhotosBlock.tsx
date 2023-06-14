/* eslint-disable max-len */
import { useState } from 'react';
// import { getPhones } from '../../api/phones';
// import { Device } from '../../types/Device';

export const PhotosBlock = () => {
  // const [phones, setPhones] = useState<Device[] | null>(null);
  const [selectedItem, setSelectedItem] = useState('');

  const plug = [{
    id: 1,
    // url: 'https://fakeimg.pl/80x80/5ec950/909090?text=1',
    url: 'https://fakeimg.pl/120x120/014d16/909090?text=test',
  },
  {
    id: 2,
    // url: 'https://fakeimg.pl/80x80/2441a3/909090?text=2',
    url: 'https://fakeimg.pl/400x400/00108c/909090?text=test+2',
  },
  {
    id: 3,
    // url: 'https://fakeimg.pl/80x80/fa1212/909090?text=3',
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

  // const loadPhones = async () => {
  //   const data = await getPhones();

  //   setPhones(data);
  // };

  // useEffect(() => {
  //   loadPhones();
  // }, []);

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
