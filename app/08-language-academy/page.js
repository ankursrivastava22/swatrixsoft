import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Language Academy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LanguageAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LanguageAcademyPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
