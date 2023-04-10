import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface IPropsCardList {
  dataList?: any[];
  numOfSlides?: number;
  key?: string | number;
  children: any;
}

const CardList = ({
  dataList = [],
  numOfSlides = 3,
  key,
  children,
}: IPropsCardList) => (
  <Swiper
    breakpoints={{
      768: { slidesPerView: numOfSlides, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      320: { slidesPerView: 1, spaceBetween: 20 },
    }}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
    key={key}
  >
    {dataList.map((data, index) => (
      <SwiperSlide key={index}>
        {React.cloneElement(children, {
          item: data,
        })}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default CardList;
