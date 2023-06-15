// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { FC } from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  phones: number;
}

export const Pagination: FC<Props> = ({ onClick, phones }) => {
  const length = [];
  const end = Math.ceil(71 / phones);

  for (let i = 1; i <= end; i += 1) {
    length.push(i);
  }

  return (
    <div className="pagination" data-cy="pagination">
      <button
        type="button"
        className="pagination__button pagination__button--switch"
        data-cy="paginationLeft"
      // onClick={() => {}}
      >
        {'<'}
      </button>

      {length.map((item) => (
        <button
          type="button"
          className="pagination__button"
          data-cy="paginationItem"
          key={Math.random()}
          onClick={onClick}
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
  );
};
