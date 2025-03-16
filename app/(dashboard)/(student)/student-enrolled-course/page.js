import BackToTop from "@/app/backToTop";
import EnrolledCoursePage from "./(enrolled-course)";

export const metadata = {
  title: "Enrolled Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const EnrolledCourseLayout = () => {
  return (
    <>
      <EnrolledCoursePage />

      <BackToTop />
    </>
  );
};

export default EnrolledCourseLayout;
