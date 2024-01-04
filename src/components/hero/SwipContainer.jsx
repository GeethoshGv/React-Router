import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { e, t, w, y, r } from "../../assets/img/img";

const SwipContainer = () => {
  return (
    <>
      <div className="sw">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={e} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={t} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={w} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={y} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipContainer;
