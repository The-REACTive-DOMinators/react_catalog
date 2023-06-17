import { FC } from 'react';
import './SpecMap.scss';
import { DeviceSpecsShort } from '../AddToCartSection/DeviceSpecsShort';

interface Props {
  phoneSpecs: DeviceSpecsShort;
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
              Array.isArray(phoneSpecs[key as keyof DeviceSpecsShort])
                ? (phoneSpecs[key as keyof DeviceSpecsShort] as string[])
                  .join(', ')
                : phoneSpecs[key as keyof DeviceSpecsShort]
            }
          </p>
        </section>
      ))}
    </div>
  );
};
