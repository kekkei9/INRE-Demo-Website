import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blog } from "@src/types/blog";
import Image from "next/image";

const BlogCard = ({
  imgSrc,
  address,
  time,
  by,
  title,
  description,
  status,
}: Blog) => {
  return (
    <div className="div-card flex flex-col bg-white deep-shadow">
      <div>
        <Image
          src={imgSrc}
          alt="blog img"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-[1.875rem] font-semibold">{address}</div>
      <div className="mt-7 flex justify-between font-medium">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} />
          <div className="ml-[0.875rem] font-medium">{time}</div>
        </div>
        <div className="capitalize font-semibold">by {by}</div>
      </div>
      <div className="title-text">
        <div className="mt-9">{title}</div>
        <div className="capitalize">{status}</div>
      </div>
      <div className="mt-[0.875rem] description-text">{description}</div>
      <button className="mt-[1.875rem] flex items-center w-fit self-end">
        <div className="mr-2">View More</div>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default BlogCard;
