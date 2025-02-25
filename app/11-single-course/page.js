import BackToTop from "../backToTop";
import SingleCoursePage from "./(single-course)";

export const metadata = {
  title: "Single Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SingleCourseLayout = () => {
  return (
    <>
      <SingleCoursePage />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
