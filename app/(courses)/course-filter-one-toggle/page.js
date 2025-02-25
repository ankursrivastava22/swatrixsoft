import BackToTop from "@/app/backToTop";
import CourseFilterTwoPage from "./index";

export const metadata = {
  title:
    "Course Filter One Toggle - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
