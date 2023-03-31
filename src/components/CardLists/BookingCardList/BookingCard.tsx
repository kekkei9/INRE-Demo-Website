import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Booking } from "@src/types/booking";
import Image from "next/image";

const BookingCard = ({ imgSrc, title, description, price }: Booking) => {
  return (
    <div className="div-card flex flex-col shadow-[0_0_4px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[5/4]">
        <Image src={imgSrc} alt="booking img" fill className="object-contain" />
      </div>
      <div className="mt-[1.875rem] title-text">{title}</div>
      <div className="mt-5 description-text">{description}</div>
      <div className="flex justify-between mt-5 items-center">
        <button className="flex items-center gap-2">
          <div>Contact Us</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className="font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default BookingCard;
