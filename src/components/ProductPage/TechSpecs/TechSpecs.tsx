import { FC } from 'react';
import './styles/main.scss';
import { DeviceSpecs } from '../../../types/DeviceSpecs';
import { SpecMap } from '../SpecMap/SpecMap';

interface Props {
  phoneSpecs: DeviceSpecs;
}

export const TechSpecs: FC<Props> = ({ phoneSpecs }) => {
  return (
    <div className="container">
      <h2 className="main-title">Tech specs</h2>

      <SpecMap phoneSpecs={phoneSpecs} />
    </div>
  );
};
