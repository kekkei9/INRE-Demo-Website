import { Blog } from "@src/types/blog";
import BlogCard from "./BlogCard";

const BlogCardList = ({ blogList }: { blogList: Blog[] }) => {
  return (
    <div className="flex flex-col 2xl:flex-row gap-card">
      {blogList.map((blog, index) => (
        <div className="flex flex-1" key={index}>
          <BlogCard {...blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardList;
