import { FC } from 'react';
import { MutatingDots } from 'react-loader-spinner';

export const Loader: FC = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
<<<<<<< HEAD
      color="#a378ff"
      secondaryColor="#a378ff"
      radius="15"
=======
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
>>>>>>> 378ffe9 (impemented full logic off loading phones and pagination)
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  );
};
