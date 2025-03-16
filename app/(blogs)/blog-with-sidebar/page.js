import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import BlogWithSidebarPage from "./(blog-sidebar)";

export const metadata = {
  title: "Blog With Sidebar- Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BlogWithSidebarLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogWithSidebarPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogWithSidebarLayout;
