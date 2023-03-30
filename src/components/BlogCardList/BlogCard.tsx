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
    <div
      className="p-6 flex flex-col bg-white rounded-[0.625rem]"
      style={{ boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)" }}
    >
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
      <div className="font-bold text-[1.75rem]">
        <div className="mt-9">{title}</div>
        <div className="capitalize">{status}</div>
      </div>
      <div className="mt-[0.875rem] text-base">{description}</div>
      <button className="mt-[1.875rem] flex items-center w-fit self-end">
        <div className="mr-2">View More</div>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default BlogCard;
