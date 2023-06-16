import { FC } from 'react';
import './styles/main.scss';
import { DeviceSpecs } from '../../../types/DeviceSpecs';
import { SpecMap } from '../SpecMap/SpecMap';

interface Props {
  chars: DeviceSpecs;
}

export const TechSpecs: FC<Props> = ({ chars }) => {
  return (
    <div className="container">
      <h2 className="main-title">Tech specs</h2>
      <SpecMap chars={chars} />
    </div>
  );
};
