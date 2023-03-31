import { BlogCardList } from "@components/CardLists/BlogCardList";
import Image from "next/image";
import { blogList } from "../../HomePage/ThirdSection";

const BlogSection = () => (
  <div className="pb-[3.4375rem]">
    <div className="px-10 lg:px-[14.25rem] py-[2.1875rem] bg-[#E6EAEE]">
      <div className="bg-[#F2F4F6] px-[1.6875rem] py-[1.4375rem] flex gap-[1.875rem] items-center flex-col 2xl:flex-row">
        <div className="flex-shrink-0">
          <Image
            src={"/assets/home/blogs/landing.png"}
            alt="landing"
            width={731}
            height={373}
          />
        </div>
        <div>
          <div className="text-4xl font-bold">
            The Most Expensive Bangalore Real Estate Sales For 2023
          </div>
          <div className="text-2xl mt-[2.1875rem]">
            with several sales in the Bangalore eclipsing the Rs.200 cr mark. As
            the pandemic continued, the ultra-wealthy sought second (and third)
            homes to add to their portfolios and were willing to spend a fortune
            to make their residences more comfortable for extended periods.
          </div>
        </div>
      </div>
    </div>
    <div className="px-10 lg:px-[14.25rem] ">
      <div className="py-[2.1875rem]">
        <BlogCardList blogList={blogList.slice(0, 2)} />
      </div>
    </div>
  </div>
);

export default BlogSection;
