import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "University Classic - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const UniversityLayout = async () => {
  const blog = await getAllPostsMeta();
  
  return (
    <>
      <UniversityPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default UniversityLayout;
