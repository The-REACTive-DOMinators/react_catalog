import { FC } from 'react';
import './styles/main.scss';
import { DeviceSpecs } from '../../../types/DeviceSpecs';
import { SpecMap } from '../SpecMap/SpecMap';

interface Props {
  phoneSpecs: DeviceSpecs;
}

export const TechSpecs: FC<Props> = ({ phoneSpecs }) => {
  return (
    <div className="container-tech-Spec">
      <h2 className="main-title-tech-spec">Tech specs</h2>
      {specNames.map((key) => (
        <section className="char" key={key}>
          <p className="name">{key}</p>
      <SpecMap phoneSpecs={phoneSpecs} />
    </div>
  );
};
