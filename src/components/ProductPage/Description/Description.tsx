/* eslint-disable quote-props */
/* eslint-disable max-len */
import { FC } from 'react';
import { About } from '../About-section/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';

const objs = [
  { title: 'And then there was Pro', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium excepturi quo veritatis molestiae aliquam optio labore rem quasi? Facere provident itaque ut recusandae voluptatibus sunt laudantium corrupti illum inventore ipsum?' },
  { title: 'Camera', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis beatae nobis quisquam tenetur, enim nesciunt dolorum omnis! Aliquam, voluptatibus velit optio nobis pariatur corporis tempora cum aperiam laborum ad incidunt quisquam illo tenetur maiores nesciunt sapiente error necessitatibus quibusdam.' },
  { title: 'Shoot it.Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis beatae nobis quisquam tenetur, enim nesciunt dolorum omnis! Aliquam, voluptatibus velit optio nobis pariatur corporis tempora cum aperiam laborum ad incidunt quisquam illo tenetur maiores nesciunt sapiente error necessitatibus quibusdam.' },
];

const chars = {
  'Screen': '6.5” OLED',
  'Resolution': '2688x1242',
  'Processor': 'Apple A12 Bionic',
  'RAM': '3 GB',
  'Built in memory': '64 GB',
  'Camera': '12 Mp + 12 Mp + 12 Mp (Triple)',
  'Zoom': 'Optical, 2x',
  'Cell': 'GSM, LTE, UMTS',
};

export const Description: FC = () => {
  return (
    <div className="grid">
      <div className="grid__item--desktop-1-12">
        <About description={objs} />
      </div>
      <div className="grid__item--desktop-13-24">
        <TechSpecs chars={chars} />
      </div>
    </div>
  );
};
