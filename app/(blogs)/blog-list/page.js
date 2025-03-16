import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog List - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BlogListLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogListPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
