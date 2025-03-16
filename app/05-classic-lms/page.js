import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Home Classic Lms - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
