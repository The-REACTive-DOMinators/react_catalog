import React, { FC } from 'react';
import { MutatingDots } from 'react-loader-spinner';

export const Loader: FC = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#a378ff"
      secondaryColor="#a378ff"
      radius="15"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  );
};
