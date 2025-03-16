import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "Course Details Two - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SingleCourseLayoutTwo = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayoutTwo;
