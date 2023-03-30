import { Booking } from "@src/types/booking";
import Image from "next/image";

const BookingCard = ({ imgSrc, title, description, price }: Booking) => {
  return (
    <div className="p-6 flex flex-col">
      <div>
        <Image
          src={imgSrc}
          alt="booking img"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div className="flex justify-between">
        <button>Contact us</button>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default BookingCard;
