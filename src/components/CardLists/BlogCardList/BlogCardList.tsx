import { Blog } from "@src/types/blog";
import BlogCard from "./BlogCard";

const BlogCardList = ({ blogList }: { blogList: Blog[] }) => {
  return (
    <div className="gap-card flex flex-row flex-wrap h-[36.125rem] sm:h-[48.5625rem] overflow-hidden">
      {blogList.map((blog, index) => (
        <div
          className="h-[36.125rem] sm:h-[48.5625rem] w-[22.5rem] sm:w-[28.5rem]"
          key={index}
        >
          <BlogCard {...blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardList;
