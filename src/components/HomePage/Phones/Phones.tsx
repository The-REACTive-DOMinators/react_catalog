/* eslint-disable max-len */
/* eslint-disable no-console */
import { NavLink, useSearchParams } from 'react-router-dom';
import { useEffect, FC, useState } from 'react';
import { Device } from '../../../types/Device';
import { getSortedPhones } from '../../../api/phones';
import { Card } from '../../Card';
import './Phone.scss';
import { HomeIcon } from '../../../icons/HomeIcon';
import { ArrowRight } from '../../../icons/ArrowRight';
import { Loader } from '../../loader/Loader';
import { Pagination } from '../../Pagination/Pagination';

export const Phones: FC = () => {
  const [phoneData, setPhoneData] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [sortBy, setSortBY] = useState('year');
  const [totalPhones, setTotalPhones] = useState(8);
  const [order, setOrder] = useState('ASC');
  // const [totalPages, setTotalPages] = useState(4);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadingSortedPhones = async (page: string) => {
    setIsLoading(true);

    const phoneList = await getSortedPhones(page);

    setPhoneData(phoneList);
    setIsLoading(false);
    setHasError(false);
  };

  useEffect(() => {
    loadingSortedPhones(`sortBy=${sortBy}&sortType=${order}&amount=${totalPhones}&currentPage=${currentPage}`);
  }, [sortBy, totalPhones, order, currentPage]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('sortBy', sortByValue);
    setSortBY(sortByValue);
    setSearchParams(searchParams);
  };

  const handleSortByPage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('amount', sortByValue);
    setTotalPhones(+sortByValue);
    setSearchParams(searchParams);
  };

  const handleSortByOrder = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('sortType', sortByValue);
    setOrder(sortByValue);
    setSearchParams(searchParams);
  };

  const handleSortByPageNumber = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const sortByValue = event.currentTarget.textContent;

    if (sortByValue !== null) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('currentPage', sortByValue);

      setCurrentPage(+sortByValue);
      setSearchParams(newSearchParams);
    }
  };

  return (
    <div className="container">
      <div className="route-links">
        <NavLink to="/home" className="home-icon">
          <HomeIcon />
        </NavLink>
        <ArrowRight className="arrow-icon" />
        <span className="phones-title">Phones</span>
      </div>
      <h1 className="title">Mobile phones</h1>

      <div className="counter">{`${phoneData.length} models`}</div>

      <div className="product-filter">
        <label className="product-filter__sortBy" htmlFor="#">
          Sort By
          <select
            className="product-filter__itemsOnPage"
            onChange={handleSortByChange}
          >
            <option value="" disabled selected>Select</option>
            <option value="year">Newest</option>
            <option value="price">Price</option>
          </select>
        </label>
        <label className="product-filter__sortBy" htmlFor="#">
          Order
          <select
            className="product-filter__itemsOnPage"
            onChange={handleSortByOrder}
          >
            <option value="ASC">Asc</option>
            <option value="DESC">Desc</option>
          </select>
        </label>
        <label className="product-filter__sortBy" htmlFor="#">
          Items on page
          <select
            className="product-filter__itemsOnPage"
            onChange={handleSortByPage}
          >
            <option value="100">all</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
          </select>
        </label>
      </div>
      <div className="phones_list">
        {isLoading && <Loader />}
        {!isLoading && phoneData.map((phone) => (
          <div className="phone">
            <Card phone={phone} />
          </div>
        ))}
        {hasError && <div>Error occurred.</div>}
      </div>
      <Pagination onClick={handleSortByPageNumber} phones={totalPhones} />
    </div>
  );
};
