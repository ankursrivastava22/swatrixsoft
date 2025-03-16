import BackToTop from "@/app/backToTop";
import CourseFilterTwoPage from "./index";

export const metadata = {
  title:
    "Course Filter One Toggle - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CourseOneToggleLayout = () => {
  return (
    <>
      <CourseFilterTwoPage />

      <BackToTop />
    </>
  );
};

export default CourseOneToggleLayout;
