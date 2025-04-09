import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import '../../links/css/GallerySlider.css';
import TeamCard from '../alumnCard'; 

const GallerySlider = ({ patreons }) => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {patreons.map((patron, index) => (
          <SwiperSlide key={index}>
            <TeamCard
              Name={patron.name}
              ProfilePhoto={patron.photo}
              LinkedIn={patron.linkedin}
              Gmail={patron.gmail}
              Instagram={patron.instagram}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
