// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/effect-cube/effect-cube.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import './Slider.scss';

import {
  Autoplay, EffectCube, Navigation, Pagination,
} from 'swiper';
import { NavLink } from 'react-router-dom';
import Acc from './Accessories.png';
import Phones from './Iphone.png';
import Tablets from './Ipad.png';

// import required modules
// SwiperCore.use([EffectCube, Navigation, Pagination]);

export default function Slider() {
  return (
    <div className="global-container">
      <div className="slider-title">
        <h1 className="slider-main-title">Welcome to Nice Gadgets Store</h1>
      </div>
      <div className="slider-container">
        <div className="arrow-left buttons-container">
          <RxCaretLeft />
        </div>

        <div className="arrow-right buttons-container">
          <RxCaretRight />
        </div>
        <Swiper
          modules={[
            Navigation, Pagination, EffectCube, Autoplay,
          ]}
          effect="cube"
          cubeEffect={{
            slideShadows: true,
            shadowScale: 0.94,
          }}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
          }}
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
            type: 'bullets',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <NavLink to="/phones">
              <img src={Phones} alt="phones" className="swiper-slide-img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/accessories">
              <img src={Acc} alt="acc" className="swiper-slide-img purple" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/tablets">
              <img src={Tablets} alt="tablets" className="swiper-slide-img" />
            </NavLink>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-custom-pagination" />
      </div>
    </div>
  );
}
