import BackToTop from "../backToTop";
import KindergartenPage from "./(kindergarten)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "KindergartenPage - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const KindergartenLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <KindergartenPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default KindergartenLayout;
