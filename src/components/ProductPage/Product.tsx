import { FC } from 'react';
import { Description } from './Description/Description';
import { PhotosBlock } from './PhotosBlock/PhotosBlock';

export const Product: FC = () => {
  const images = [
    'img/phones/apple-iphone-11/black/00.jpg',
    'img/phones/apple-iphone-11/black/01.jpg',
    'img/phones/apple-iphone-11/black/02.jpg',
    'img/phones/apple-iphone-11/black/03.jpg',
    'img/phones/apple-iphone-11/black/04.jpg',
  ];

  return (
    <>
      <PhotosBlock images={images} />
      <Description />
    </>
  );
};
