import { FC } from 'react';
import { About } from '../About-section/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import { Summary } from '../../../types/Summary';
import { DeviceSpecs } from '../../../types/DeviceSpecs';

interface Props {
  loadedDescription: Summary['description'];
  phoneSpecs: DeviceSpecs;
}

export const Description: FC<Props> = ({ loadedDescription, phoneSpecs }) => {
  return (
    <div className="grid">
      <div className="grid__item--desktop-1-12">
        <About description={loadedDescription} />
      </div>

      <div className="grid__item--desktop-13-24">
        <TechSpecs phoneSpecs={phoneSpecs} />
      </div>
    </div>
  );
};
