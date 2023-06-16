// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { getLength } from '../../api/phones';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  phones: number;
  currentPage: number | null;
  onForward: () => void;
  onBack: () => void;
}

export const Pagination: FC<Props> = ({
  onClick,
  phones,
  currentPage,
  onForward,
  onBack,
}) => {
  const [phoneDataLength, setPhoneDataLength] = useState<number>(0);
  const length = [];
  const end = Math.ceil(phoneDataLength / phones);

  for (let i = 1; i <= end; i += 1) {
    length.push(i);
  }

  useEffect(() => {
    const fetchPhoneDataLength = async () => {
      try {
        const dataLength = await getLength();

        setPhoneDataLength(dataLength);
      } catch (error) {
        throw new Error();
      }
    };

    fetchPhoneDataLength();
  }, []);

  return (
    <div className="pagination" data-cy="pagination">
      <button
        disabled={currentPage === 1}
        type="button"
        className="pagination__button pagination__button--switch"
        data-cy="paginationLeft"
        onClick={onBack}
      >
        {'<'}
      </button>

      {length.map((item) => (
        <button
          type="button"
          // className="pagination__button"
          className={cn('pagination__button',
            { 'pagination__button--pressed': item === currentPage })}
          data-cy="paginationItem"
          key={Math.random()}
          onClick={onClick}
        >
          {item}
        </button>
      ))}

      <button
        disabled={currentPage === end}
        type="button"
        className="pagination__button pagination__button--switch"
        data-cy="paginationRight"
        onClick={onForward}
      >
        {'>'}
      </button>
    </div>
  );
};
