import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Booking } from "@src/types/booking";
import Image from "next/image";
import { useRouter } from "next/router";

const BookingCard = ({ imgSrc, title, description, price }: Booking) => {
  const router = useRouter();

  return (
    <div className="div-card flex flex-col shadow-[0_0_4px_rgba(0,0,0,0.3)] hover:shadow-[0_0_80px_rgba(0,0,0,0.2)]">
      <div className="relative aspect-[2/1]">
        <Image src={imgSrc} alt="booking img" fill className="object-contain" />
      </div>
      <div className="mt-[0.625rem] sm:mt-[1.875rem] title-text">{title}</div>
      <div className="mt-[0.625rem] sm:mt-5 description-text line-clamp-3">
        {description}
      </div>
      <div className="flex justify-between mt-[0.625rem] sm:mt-5 items-center">
        <button
          className="flex items-center gap-1 px-5"
          onClick={() => router.push("/contact")}
        >
          <div className="text-sm">Contact Us</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className="font-semibold text-sm">{price}</div>
      </div>
    </div>
  );
};

export default BookingCard;
