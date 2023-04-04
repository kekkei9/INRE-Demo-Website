import { Booking } from "@src/types/booking";
import BookingCard from "./BookingCard";

const BookingCardList = ({ bookingList }: { bookingList: Booking[] }) => {
  return (
    <div>
      <div className="sm:hidden md:flex flex flex-row max-sm:flex-col gap-card items-center">
        {bookingList.map((bookingData, index) => (
          <BookingCard key={index} {...bookingData} />
        ))}
      </div>
      <div className="hidden sm:flex md:hidden justify-center gap-card">
        {bookingList.slice(0, 2).map((bookingData, index) => (
          <BookingCard key={index} {...bookingData} />
        ))}
      </div>
    </div>
  );
};

export default BookingCardList;
