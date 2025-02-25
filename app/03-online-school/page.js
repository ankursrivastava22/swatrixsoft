import BackToTop from "../backToTop";
import OnlineSchoolPage from "./(online-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Online School - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
