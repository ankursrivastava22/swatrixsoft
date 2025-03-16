import BackToTop from "../backToTop";
import SingleCoursePage from "./(single-course)";

export const metadata = {
  title: "Single Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
