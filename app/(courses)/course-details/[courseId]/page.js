import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "Course Details - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SingleCourseLayout = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
