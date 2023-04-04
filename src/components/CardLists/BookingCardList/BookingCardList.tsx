import { Booking } from "@src/types/booking";
import BookingCard from "./BookingCard";

const BookingCardList = ({ bookingList }: { bookingList: Booking[] }) => {
  return (
    <div className="gap-card flex flex-row flex-wrap h-[29.5rem] sm:h-[40.4375rem] overflow-hidden">
      {bookingList.map((bookingData, index) => (
        <div
          className="h-[28.25rem] sm:h-[40.4375rem] w-[22.5rem] sm:w-[28.5rem]"
          key={index}
        >
          <BookingCard {...bookingData} />
        </div>
      ))}
    </div>
  );
};

export default BookingCardList;
