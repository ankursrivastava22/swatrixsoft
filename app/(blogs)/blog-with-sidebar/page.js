import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import BlogWithSidebarPage from "./(blog-sidebar)";

export const metadata = {
  title: "Blog With Sidebar- Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
