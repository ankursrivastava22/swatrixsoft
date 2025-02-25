import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "University Classic - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
