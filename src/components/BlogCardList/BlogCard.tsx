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
    <div className="p-6 flex flex-col">
      <div>
        <Image
          src={imgSrc}
          alt="blog img"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div>{address}</div>
      <div className="flex justify-between">
        <div className="flex">
          <div>{time}</div>
        </div>
        <div className="capitalize">by {by}</div>
      </div>
      <div>{title}</div>
      <div className="capitalize">{status}</div>
      <div>{description}</div>
      <button>View More</button>
    </div>
  );
};

export default BlogCard;
