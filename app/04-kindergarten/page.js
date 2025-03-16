import BackToTop from "../backToTop";
import KindergartenPage from "./(kindergarten)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "KindergartenPage - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
