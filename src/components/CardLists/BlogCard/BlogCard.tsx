import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blog } from "@src/types/blog";
import Image from "next/image";
import { useRouter } from "next/router";

const BlogCard = ({ item }: { item?: Blog }) => {
  const router = useRouter();
  return (
    <div className="div-card flex flex-col bg-white deep-shadow">
      {item && (
        <div>
          <Image
            src={item?.imgSrc}
            alt="blog img"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="mt-5 sm:mt-[1.875rem] font-semibold">{item?.address}</div>
      <div className="mt-3 sm:mt-7 flex justify-between font-medium">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} />
          <div className="ml-[0.875rem] font-medium">{item?.time}</div>
        </div>
        <div className="capitalize font-semibold">by {item?.by}</div>
      </div>
      <div className="title-text mt-5 sm:mt-9">{item?.title}</div>
      <div className="mt-[0.625rem] sm:mt-[0.875rem] description-text">
        “Lorem ipsum dolor sit amet consectetur. Aliquam non laoreet scelerisque
        ullamcorper. Pulvinar sed dictum ornare mi eget montes laoreet enim. Ut
        morbi...
      </div>
      <button
        className="mt-5 sm:mt-[1.875rem] flex items-center justify-center w-full sm:w-fit self-end"
        onClick={() => router.push(`/blogs/${item?.id}`)}
      >
        <div className="mr-2">View More</div>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default BlogCard;
