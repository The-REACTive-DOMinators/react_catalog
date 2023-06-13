import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Pagination = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const numberOfPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h1 className="title">Mobile phones</h1>

      <div className="counter">{`${products.length} models`}</div>

      <div className="product-filter">
        <label className="product-filter__sortBy" htmlFor="#">
          Sort By
          <select
            className="product-filter__itemsOnPage"
            onChange={(event) => {
              searchParams.set('sortBy', event.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="newest">Newest</option>
            <option value="alphabetically">Alphabetically</option>
            <option value="price">Price</option>
          </select>
        </label>
        <label className="product-filter__sortBy" htmlFor="#">
          Items on page
          <select
            className="product-filter__itemsOnPage"
            onChange={(event) => {
              searchParams.set('perPage', event.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="100">all</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
          </select>
        </label>
      </div>

      <main>
        <div className="product">
          {products.map((item) => (
            <div className="container">
              <div className="product__card">
                {item}
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="pagination" data-cy="pagination">
        <button
          type="button"
          className="pagination__button pagination__button--switch"
          data-cy="paginationLeft"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            searchParams.set('page', (currentPage - 1).toString());
            setSearchParams(searchParams);
          }}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>

        {numberOfPages.map((item) => (
          <button
            type="button"
            className={classNames('pagination__button',
              { 'pagination__button--active': item === currentPage })}
            data-cy="paginationItem"
            key={Math.random()}
            onClick={() => {
              setCurrentPage(item);
              searchParams.set('page', item.toString());
              setSearchParams(searchParams);
            }}
            disabled={currentPage === numberOfPages.length}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          className="pagination__button pagination__button--switch"
          data-cy="paginationRight"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            searchParams.set('page', (currentPage + 1).toString());
            setSearchParams(searchParams);
          }}
        >
          {'>'}
        </button>
      </div>
    </>
  );
};
