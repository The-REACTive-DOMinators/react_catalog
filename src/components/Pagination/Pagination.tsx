/* eslint-disable max-len */
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
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);

  const fetchPhoneDataLength = async () => {
    try {
      const dataLength = await getLength();

      setPhoneDataLength(dataLength);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchPhoneDataLength();
  }, []);

  useEffect(() => {
    if (currentPage !== null && phoneDataLength > 0) {
      const totalPages = Math.ceil(phoneDataLength / phones);
      const newStart = Math.max(1, currentPage - 2);
      const newEnd = Math.min(newStart + 4, totalPages);

      setStart(newStart);
      setEnd(newEnd);
    }
  }, [currentPage, phones, phoneDataLength]);

  if (currentPage === null) {
    return null;
  }

  const range = Array.from({ length: end - start + 1 }, (_, index) => start + index);

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

      {range.map((item) => (
        <button
          type="button"
          className={cn('pagination__button', {
            'pagination__button--pressed': item === currentPage,
          })}
          data-cy="paginationItem"
          key={item}
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
