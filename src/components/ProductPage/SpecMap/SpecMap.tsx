import { FC } from 'react';
import './SpecMap.scss';
import { DeviceSpecs } from '../../../types/DeviceSpecs';

interface Props {
  phoneSpecs: DeviceSpecs;
}

export const SpecMap: FC<Props> = ({ phoneSpecs }) => {
  const specNames = Object.keys(phoneSpecs);

  return (
    <div>
      {specNames.map((key) => (
        <section className="char" key={key}>
          <p className="name">{key}</p>

          <p className="value">
            {
              Array.isArray(phoneSpecs[key as keyof DeviceSpecs])
                ? (phoneSpecs[key as keyof DeviceSpecs] as string[]).join(', ')
                : phoneSpecs[key as keyof DeviceSpecs]
            }
          </p>
        </section>
      ))}
    </div>
  );
};
