import { Booking } from "@src/types/booking";
import BookingCard from "./BookingCard";
import { Swiper, SwiperSlide } from "swiper/react";

const BookingCardList = ({ bookingList }: { bookingList: Booking[] }) => {
  return (
    <div className="flex gap-card items-center">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {bookingList.map((bookingData, index) => (
          <SwiperSlide key={index}>
            <BookingCard {...bookingData} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="sm:hidden md:flex flex flex-row max-sm:flex-col gap-card items-center">
        {bookingList.map((bookingData, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <BookingCard key={index} {...bookingData} />{" "}
          </div>
        ))}
      </div>
      <div className="hidden sm:flex md:hidden justify-center gap-card">
        {bookingList.slice(0, 2).map((bookingData, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <BookingCard key={index} {...bookingData} />{" "}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default BookingCardList;
