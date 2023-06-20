import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import { Loader } from '../../loader/Loader';

const URL = process.env.REACT_APP_BASE_URL;

interface Props {
  images: string[];
}

export const PhotosBlock: React.FC<Props> = ({ images }) => {
  const [index, setindex] = useState(0);

  useEffect(() => {
    setindex(prevndex => prevndex + 1);
  }, [images]);

  return (
    <section className="photo-block">
      <div className="photo-block-slider">
        <Swiper
          modules={[Pagination]}
          className="photo-block__list"
          observer
          key={index}
          id="swiper"
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (slideIndex, className) => {
              return `<div class="${className}">
                          <img class="bullet-image" src=${URL}/${images[slideIndex]} alt="phone" />
                      </div>`;
            },
          }}
        >
          {images.length ? (
            <Swiper>
              {images.map((image) => (
                <SwiperSlide key={image}>
                  <div className="photo-block__selectedItem-container">
                    <img
                      src={`${URL}/${image}`}
                      alt="phone-img"
                      className="photo-block__selectedItem"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Loader />
          )}

        </Swiper>
      </div>
    </section>
  );
};
