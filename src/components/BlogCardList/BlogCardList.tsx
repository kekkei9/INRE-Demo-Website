import { Blog } from "@src/types/blog";
import BlogCard from "./BlogCard";

const BlogCardList = ({ blogList }: { blogList: Blog[] }) => {
  return (
    <div className="flex gap-[2.875rem]">
      {blogList.map((blog, index) => (
        <div className="flex flex-1" key={index}>
          <BlogCard {...blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardList;
