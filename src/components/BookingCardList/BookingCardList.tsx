import { Booking } from "@src/types/booking";
import BookingCard from "./BookingCard";

const BookingCardList = ({ bookingList }: { bookingList: Booking[] }) => {
  return (
    <div className="flex gap-[2.875rem] flex-col 2xl:flex-row">
      {bookingList.map((bookingData, index) => (
        <div className="flex flex-1" key={index}>
          <BookingCard {...bookingData} />
        </div>
      ))}
    </div>
  );
};

export default BookingCardList;
