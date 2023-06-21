import {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './SearchPhone.scss';
import { Link } from 'react-router-dom';
import { getPhones } from '../../../api/phones';
import { Device } from '../../../types/Device';

export const SearchPhone: FC = () => {
  const [query, setQuery] = useState('');
  const [phonesList, setPhonesList] = useState<Device[] | []>([]);
  const [showPhoneList, setShowPhoneList] = useState(false);

  const loadPhones = useCallback(async () => {
    const phones = await getPhones();

    setPhonesList(phones);
  }, []);

  const filterPhones = (phones: Device[], value: string) => {
    return phones.filter(phone => (
      phone.name.toLowerCase().includes(value.toLowerCase())
    ));
  };

  useEffect(() => {
    loadPhones();
  }, []);

  useEffect(() => {
    filterPhones(phonesList, query);
  }, [query]);

  const filteredPhones = filterPhones(phonesList, query);

  return (
    <div className="search-input_container">
      <div className="underline">
        <input
          placeholder="Search..."
          type="search"
          className="searchInput"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onClick={() => setShowPhoneList(!showPhoneList)}
        />
      </div>

      {showPhoneList && (
        <ul className="phones-list">
          {filteredPhones.map(({ name, id }) => (
            <Link key={id} to={`/phones/${id}`}>
              <li className="phones-list__item">{name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
