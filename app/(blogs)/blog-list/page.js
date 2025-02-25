import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog List - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
