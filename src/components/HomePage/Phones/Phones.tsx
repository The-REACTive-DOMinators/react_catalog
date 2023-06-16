/* eslint-disable max-len */
/* eslint-disable no-console */
import { NavLink, useSearchParams } from 'react-router-dom';
import { useEffect, FC, useState } from 'react';
import { Device } from '../../../types/Device';
import { getSortedPhones } from '../../../api/phones';
import { ProductCard } from '../../ProductCard';
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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadingSortedPhones = async (page: string) => {
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
    searchParams.set('currentPage', '1');
    setSortBY(sortByValue);
    setCurrentPage(1);
    setSearchParams(searchParams);
  };

  const handleSortByPage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('amount', sortByValue);
    searchParams.set('currentPage', '1');
    setTotalPhones(+sortByValue);
    setCurrentPage(1);
    setSearchParams(searchParams);
  };

  const handleSortByOrder = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    searchParams.set('sortType', sortByValue);
    searchParams.set('currentPage', '1');
    setOrder(sortByValue);
    setCurrentPage(1);
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
      {!isLoading
        ? (
          <div className="container1">
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
                  defaultValue={8}
                >
                  <option value="71">all</option>
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="16">16</option>
                </select>
              </label>
            </div>

            <div className="phones_list">
              {!isLoading && phoneData.map((phone) => (
                <div className="phone">
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
        )
        : (
          <div className="loader">
            <Loader />
          </div>
        )}
    </>
  );
};
