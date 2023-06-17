/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductSlider.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';

import { FC, useRef } from 'react';
import { Device } from '../../types/Device';
import { ProductCard } from '../ProductCard';
import { ButtonWithIcon } from '../ButtonWithIcon';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { ArrowRight } from '../../icons/ArrowRight';

type Props = {
  recommendedProducts: Device[]
};

export const ProductSlider: FC<Props> = ({ recommendedProducts }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="product-slider">

      <div className="product-slider__header">
        <h2 className="product-slider__header__title">You may also like</h2>

        <div className="product-slider__buttons">
          <div className="product-slider__buttons__button--prev">
            <ButtonWithIcon
              onHandleClick={goToPrevSlide}
              isSelected={false}
            >
              <ArrowLeft />
            </ButtonWithIcon>
          </div>

          <div className="product-slider__buttons__button--next">
            <ButtonWithIcon
              onHandleClick={goToNextSlide}
              isSelected={false}
            >
              <ArrowRight />
            </ButtonWithIcon>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        className="product-slider"
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          prevEl: 'product-slider__buttons__button--prev',
          nextEl: 'product-slider__buttons__button--next',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="product-slider__content">
          {recommendedProducts.map(product => (
            <SwiperSlide className="product-slider__content__card">
              <ProductCard phone={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
