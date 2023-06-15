import { FC } from 'react';
import './styles/main.scss';
import { DeviceSpecs } from '../../../types/DeviceSpecs';

interface Props {
  chars: DeviceSpecs;
}

export const TechSpecs: FC<Props> = ({ chars }) => {
  const specNames = Object.keys(chars);

  return (
    <div className="container">
      <h2 className="main-title">Tech specs</h2>
      {specNames.map((key) => (
        <section className="char" key={key}>
          <p className="name">{key}</p>

          <p className="value">{chars[key as keyof DeviceSpecs]}</p>
        </section>
      ))}
    </div>
  );
};
