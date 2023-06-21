import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductSlider.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';

import React, { FC, useRef } from 'react';
import { Device } from '../../types/Device';
import { ProductCard } from '../ProductCard';
import { ButtonWithIcon } from '../ButtonWithIcon';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { ArrowRight } from '../../icons/ArrowRight';
import { Loader } from '../loader/Loader';

type Props = {
  products: Device[]
  title: string
};

export const ProductSlider: FC<Props> = ({ products, title }) => {
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
        <h2 className="product-slider__header__title">{title}</h2>

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
        loop
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          prevEl: 'product-slider__buttons__button--prev',
          nextEl: 'product-slider__buttons__button--next',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1199: {
            slidesPerView: 4,
            initialSlide: 0,
          },
          1094: {
            slidesPerView: 4,
          },
          828: {
            slidesPerView: 3,
          },
          578: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="product-slider__content">
          {products.length ? products.map(product => (
            <SwiperSlide className="product-slider__content__card">
              <ProductCard phone={product} />
            </SwiperSlide>
          ))
            : <Loader />}
        </div>
      </Swiper>
    </div>
  );
};
