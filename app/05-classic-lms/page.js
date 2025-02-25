import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Home Classic Lms - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ClassicLmsLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <ClassicLmsPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ClassicLmsLayout;
