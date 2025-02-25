import BackToTop from "../backToTop";
import CourseSchoolPage from "./(course-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Course School - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
