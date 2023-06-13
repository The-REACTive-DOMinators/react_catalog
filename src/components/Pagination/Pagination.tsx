// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Pagination = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const numberOfPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const [sortBy, setSortBy] = useState('newest');
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="product-filter">
        <label className="product-filter__sortBy" htmlFor="#">
          Sort By
          <select
            className="product-filter__itemsOnPage"
            onChange={(event) => {
              searchParams.set('sortBy', event.target.value);
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
          // onClick={() => {}}
        >
          {'<'}
        </button>

        {numberOfPages.map((item) => (
          <button
            type="button"
            className="pagination__button"
            data-cy="paginationItem"
            key={Math.random()}
            // onClick={() => {}}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          className="pagination__button pagination__button--switch"
          data-cy="paginationRight"
          // onClick={() => {}}
        >
          {'>'}
        </button>
      </div>
    </>
  );
};
