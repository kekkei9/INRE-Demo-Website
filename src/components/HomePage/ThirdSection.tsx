import { BeginSection } from "@components/DisplaySections/BeginSection";
import { Blog } from "@src/types/blog";
import { BlogCardList } from "@components/CardLists/BlogCardList";

export const blogList: Blog[] = [
  {
    imgSrc: "/assets/home/blogs/img_1.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Guide for personal property",
    status: "buying",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
  },
  {
    imgSrc: "/assets/home/blogs/img_2.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Guide for personal property",
    status: "buying",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
  },
  {
    imgSrc: "/assets/home/blogs/img_3.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Guide for personal property",
    status: "buying",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
  },
];

const ThirdSection = () => (
  <div className="div-section bg-[#F1F1F1] sm:py-[3.4375rem]">
    <div className="mb-9">
      <BeginSection label="Blogs" />
    </div>
    <BlogCardList blogList={blogList} />
  </div>
);

export default ThirdSection;
