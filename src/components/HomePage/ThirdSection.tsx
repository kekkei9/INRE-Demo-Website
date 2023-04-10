import { BeginSection } from "@components/DisplaySections/BeginSection";
import { Blog } from "@src/types/blog";
import { CardList } from "@components/CardLists/CardList";
import { BlogCard } from "@components/CardLists/BlogCard";
import useSWR from "swr";

const ThirdSection = () => {
  const { data: blogList } = useSWR<Blog[]>({
    url: "/blogs",
    args: {},
  });

  return (
    <div className="div-section bg-[#F1F1F1] sm:py-[3.4375rem]">
      <div className="mb-9">
        <BeginSection label="Blogs" />
      </div>
      <CardList dataList={blogList}>
        <BlogCard />
      </CardList>
    </div>
  );
};

export default ThirdSection;
