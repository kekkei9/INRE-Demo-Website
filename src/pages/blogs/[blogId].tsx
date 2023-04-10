import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BeginSection } from "@components/DisplaySections/BeginSection";
import BlogCard from "@components/CardLists/BlogCardList/BlogCard";
import { blogList } from "@components/HomePage/ThirdSection";
import { BlogCardList } from "@components/CardLists/BlogCardList";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "@styles/markdown-styles.module.scss";
import useSWR from "swr";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

const Blog = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const { data: blogData } = useSWR<Blog>({
    url: `/blogs/${blogId}`,
    args: {},
  });

  return (
    <div>
      <div className="div-section text-base sm:text-xl flex flex-col gap-5 sm:gap-[2.1875rem]">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => router.back()}
            className="cursor-pointer"
          />
          <div className="ml-[1.125rem]">{blogData?.title}</div>
        </div>
        <div className="block sm:hidden aspect-[4/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="hidden sm:block aspect-[10/3] relative">
          <Image
            src="/assets/home/blogs/1/img_1_desktop.png"
            alt="img blog 1"
            fill
            className="object-fill"
          />
        </div>
        <div className="flex max-sm:justify-between gap-[8.125rem] sm:text-2xl">
          <div className="flex gap-[0.875rem]">
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>By Admin</div>
          </div>
          <div className="flex gap-[0.875rem]">
            <FontAwesomeIcon icon={faCalendar} />
            <div>09 jun 2022</div>
          </div>
        </div>
        <div className="p-[0.9375rem] bg-[#F2F4F6] relative sm:px-12">
          <div className="opacity-60">
            This whole purchase journey of real estate purchase can be divided
            into three broad stages. For more details, click here
          </div>
          <div className="h-full w-[0.3125rem] left-0 top-0 absolute bg-primary rounded-[0.3125rem]"></div>
        </div>
        {blogData && (
          <ReactMarkdown
            className={`opacity-60 sm:text-2xl ${styles["react-markdown"]}`}
          >
            {blogData.content}
          </ReactMarkdown>
        )}
        <div className="py-[4.375rem] hidden sm:block">
          <div className="border" />
          <div className="mt-[4.375rem] flex justify-between">
            <Link href={`/blogs/${blogId ? Number(blogId) - 1 : ""}`}>
              <button>Previous Post</button>
            </Link>
            <Link href={`/blogs/${blogId ? Number(blogId) + 1 : ""}`}>
              <button className="btn-primary">Next Post</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm: justify-between gap-5">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-primary text-2xl mt-[0.625rem]">
              Share this Post and Follow us on :
            </div>
            <div className="opacity-60 text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeius modtempor
            </div>
            <div className="flex gap-[1.125rem]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold">
              Register Now For Regular Updates :
            </div>
            <button className="text-lg flex items-center gap-2 justify-center w-fit">
              <div className="block sm:hidden">Register Now</div>
              <div className="hidden sm:block">Contact Now</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="div-section flex flex-col gap-5 bg-[#CCD3DC] sm:bg-[#F2F4F6]">
        <BeginSection label="You May Also Like This" />
        <div className="block sm:hidden">
          <BlogCard {...blogList[0]} />
        </div>
        <div className="hidden sm:block">
          <BlogCardList blogList={blogList} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
