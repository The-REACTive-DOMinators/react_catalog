import {
  FC,
  useCallback,
  useEffect,
  useRef,
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

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchContainerRef.current
      && !searchContainerRef.current.contains(event.target as Node)
    ) {
      setShowPhoneList(false);
    }
  };

  const handleSearchInputClick = () => {
    setShowPhoneList(!showPhoneList);
    setQuery('');
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="search-input_container" ref={searchContainerRef}>
      <div className="underline">
        <input
          placeholder="Search..."
          type="search"
          className="searchInput"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onClick={handleSearchInputClick}
          ref={searchInputRef}
        />
      </div>

      {showPhoneList && (
        <ul className="phones-list">
          {filteredPhones.map(({ name, phoneId }) => (
            <Link key={phoneId} to={`/phones/${phoneId}`} onClick={handleSearchInputClick}>
              <li className="phones-list__item">{name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
