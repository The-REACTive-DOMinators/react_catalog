/* eslint-disable max-len */
import { FC } from 'react';
import { About } from '../About-section/About';
import { Summary } from '../../../types/Summary';

interface Props {
  descriptionObj: Summary['description'];
}

export const Description: FC<Props> = ({ descriptionObj }) => {
  return (
    <div className="grid">
      <div className="grid__item--tablet-1-12">
        <About description={descriptionObj} />
      </div>
    </div>
  );
};
