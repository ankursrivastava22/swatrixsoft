import BackToTop from "@/app/backToTop";
import BlogGridPage from "./(blog-grid)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BlogGridLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogGridPage getAllBlogs={blog} />

      <BackToTop />
    </>
  );
};

export default BlogGridLayout;
