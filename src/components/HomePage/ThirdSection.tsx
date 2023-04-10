import { BeginSection } from "@components/DisplaySections/BeginSection";
import { Blog } from "@src/types/blog";
import { CardList } from "@components/CardLists/CardList";
import { BlogCard } from "@components/CardLists/BlogCard";

export const blogList: Blog[] = [
  {
    id: "1",
    imgSrc: "/assets/home/blogs/img_1.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Application of Blockchain in real estate industry",
    status: "buying",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
  },
  {
    id: "2",
    imgSrc: "/assets/home/blogs/img_2.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Real estate Challenges in Bengaluru",
    status: "buying",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
  },
  {
    id: "3",
    imgSrc: "/assets/home/blogs/img_3.png",
    address: "Real Estate, Analysis",
    time: "09 jun 2022",
    by: "admin",
    title: "Artificial Intelligence in Realty",
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
    <CardList dataList={blogList}>
      <BlogCard />
    </CardList>
  </div>
);

export default ThirdSection;
