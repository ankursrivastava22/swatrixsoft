import BackToTop from "../backToTop";
import CourseSchoolPage from "./(course-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Course School - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CourseSchoolLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <CourseSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default CourseSchoolLayout;
