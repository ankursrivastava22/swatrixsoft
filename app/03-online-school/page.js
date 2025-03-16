import BackToTop from "../backToTop";
import OnlineSchoolPage from "./(online-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Online School - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};


const OnlineSchoolLayout =async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <OnlineSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default OnlineSchoolLayout;
