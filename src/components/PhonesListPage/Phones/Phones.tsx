import { NavLink, useSearchParams } from 'react-router-dom';
import {
  useEffect,
  FC, useState,
  ChangeEvent,
  MouseEvent,
} from 'react';
import classNames from 'classnames';
import { Device } from '../../../types/Device';
import { getLength, getSortedPhones } from '../../../api/phones';
import { ProductCard } from '../../ProductCard';
import './Phone.scss';
import { HomeIcon } from '../../../icons/HomeIcon';
import { ArrowRight } from '../../../icons/ArrowRight';
import { Loader } from '../../loader/Loader';
import { Pagination } from './Pagination/Pagination';

export const Phones: FC = () => {
  const [phoneData, setPhoneData] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [sortBy, setSortBY] = useState('year');
  const [totalPhones, setTotalPhones] = useState(8);
  const [order, setOrder] = useState('ASC');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phoneDataLength, setPhoneDataLength] = useState<number>(0);

  const loadingSortedPhones = async (page: string) => {
    setIsLoading(true);
    const phoneList = await getSortedPhones(page);

    setPhoneData(phoneList);
    setIsLoading(false);
    setHasError(false);
  };

  const fetchPhoneDataLength = async () => {
    try {
      const dataLength = await getLength();

      setPhoneDataLength(dataLength);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    const storedSortByValue = localStorage.getItem('sortByValue');
    const storedSortByPageValue = localStorage.getItem('sortByPageValue');
    const storedSortByOrderValue = localStorage.getItem('sortByOrderValue');

    if (storedSortByValue) {
      setSortBY(storedSortByValue);
    }

    if (storedSortByPageValue) {
      setTotalPhones(+storedSortByPageValue);
    }

    if (storedSortByOrderValue) {
      setOrder(storedSortByOrderValue);
    }

    loadingSortedPhones(`sortBy=${sortBy}&sortType=${order}&amount=${totalPhones}&currentPage=${currentPage}`);
    fetchPhoneDataLength();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [sortBy, totalPhones, order, currentPage]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('sortBy', sortByValue);
    searchParams.set('currentPage', '1');
    setSortBY(sortByValue);
    setCurrentPage(1);
    setSearchParams(searchParams);

    localStorage.setItem('sortByValue', sortByValue);
  };

  const handleSortByPage = async (event: ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('amount', sortByValue);
    searchParams.set('currentPage', '1');
    setTotalPhones(+sortByValue);
    setCurrentPage(1);
    setSearchParams(searchParams);

    localStorage.setItem('sortByPageValue', sortByValue);
  };

  const handleSortByOrder = async (event: ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('sortType', sortByValue);
    searchParams.set('currentPage', '1');
    setOrder(sortByValue);
    setCurrentPage(1);
    setSearchParams(searchParams);

    localStorage.setItem('sortByOrderValue', sortByValue);
  };

  // eslint-disable-next-line max-len
  const handleSortByPageNumber = async (event: MouseEvent<HTMLButtonElement>) => {
    const sortByValue = event.currentTarget.textContent;

    if (sortByValue !== null) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('currentPage', sortByValue);

      setCurrentPage(+sortByValue);
      setSearchParams(newSearchParams);
    }
  };

  const handlePageForward = async () => {
    const sortByValue = String(currentPage + 1);

    if (sortByValue !== null) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('currentPage', sortByValue);

      setCurrentPage(+sortByValue);
      setSearchParams(newSearchParams);
    }
  };

  const handlePageBack = async () => {
    const sortByValue = String(currentPage - 1);

    if (sortByValue !== null) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('currentPage', sortByValue);

      setCurrentPage(+sortByValue);
      setSearchParams(newSearchParams);
    }
  };

  return (
    <>
      <div className="container1">
        <div className="route-links">
          <NavLink to="/home" className="home-icon">
            <HomeIcon />
          </NavLink>
          <ArrowRight className="arrow-icon" />
          <span className="phones-title">Phones</span>
        </div>
        <h1 className="title">Mobile phones</h1>

        <div className="counter">{`${phoneDataLength} models`}</div>

        <div className="product-filter">
          <label className="product-filter__sortBy" htmlFor="#">
            Sort By
            <select
              className="product-filter__itemsOnPage sortBy"
              onChange={handleSortByChange}
              defaultValue={localStorage.getItem('sortByValue') ?? 'Select'}
            >
              <option value="" disabled defaultValue="Select">Select</option>
              <option value="year">Newest</option>
              <option value="price">Price</option>
            </select>
          </label>
          <label className="product-filter__sortBy" htmlFor="#">
            Order
            <select
              className="product-filter__itemsOnPage order"
              onChange={handleSortByOrder}
              defaultValue={localStorage.getItem('sortByOrderValue')
                    ?? 'ASC'}
            >
              <option value="ASC">Asc</option>
              <option value="DESC">Desc</option>
            </select>
          </label>
          <label className="product-filter__sortBy pages" htmlFor="#">
            Items on page
            <select
              className="product-filter__itemsOnPage"
              onChange={handleSortByPage}
              defaultValue={localStorage.getItem('sortByPageValue')
                    ?? totalPhones}
            >
              <option value="71">all</option>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </label>
        </div>
        <div className={classNames('phones_list', {
          'flex-loader': isLoading,
        })}
        >
          {isLoading && (
            <div className="loader">
              <Loader />
            </div>
          )}
          {!isLoading && phoneData.map((phone) => (
            <div className="phone" key={phone.id}>
              <ProductCard phone={phone} />
            </div>
          ))}
          {hasError && <div>Error occurred.</div>}
        </div>
        <Pagination
          onClick={handleSortByPageNumber}
          phones={totalPhones}
          currentPage={currentPage}
          onForward={handlePageForward}
          onBack={handlePageBack}
        />
      </div>
    </>
  );
};
