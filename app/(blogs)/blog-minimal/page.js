import BackToTop from "@/app/backToTop";
import BlogGridMinimalPage from "./(blog-minimal)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BlogGridMinimalLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <BlogGridMinimalPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogGridMinimalLayout;
