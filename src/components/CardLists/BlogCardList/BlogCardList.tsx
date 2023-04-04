import { Blog } from "@src/types/blog";
import BlogCard from "./BlogCard";

const BlogCardList = ({ blogList }: { blogList: Blog[] }) => {
  return (
    <div className="gap-card flex justify-center max-sm:flex-col">
      <div className="sm:hidden md:flex flex flex-row max-sm:flex-col gap-card items-center">
        {blogList.map((blog, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="hidden sm:flex md:hidden justify-center gap-card">
        {blogList.slice(0, 2).map((blog, index) => (
          <div className="w-[22.5rem] sm:w-[19rem]" key={index}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardList;
