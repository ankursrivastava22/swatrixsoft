import BackToTop from "@/app/backToTop";
import BlogGridMinimalPage from "./(blog-minimal)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
