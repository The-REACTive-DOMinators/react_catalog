import { FC } from 'react';
import './styles/main.scss';

export const TechSpecs: FC = () => {
  const chars = [
    {
      name: 'Screen',
      value: '6.5” OLED',
    },
    {
      name: 'Resolution',
      value: '2688x1242',
    },
    {
      name: 'Processor',
      value: 'Apple A12 Bionic',
    },
    {
      name: 'RAM',
      value: '3 GB',
    },
    {
      name: 'Built in memory',
      value: '64 GB',
    },
    {
      name: 'Camera',
      value: '12 Mp + 12 Mp + 12 Mp (Triple)',
    },
    {
      name: 'Zoom',
      value: 'Optical, 2x',
    },
    {
      name: 'Cell',
      value: 'GSM, LTE, UMTS',
    },
  ];

  return (
    <div className="container">
      <h2 className="main-title">Tech specs</h2>

      {chars.map(({ name, value }) => (
        <section className="char">
          <p className="name">{name}</p>
          <p className="value">{value}</p>
        </section>
      ))}
    </div>
  );
};
