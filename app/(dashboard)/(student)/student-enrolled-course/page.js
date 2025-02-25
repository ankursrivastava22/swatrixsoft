import BackToTop from "@/app/backToTop";
import EnrolledCoursePage from "./(enrolled-course)";

export const metadata = {
  title: "Enrolled Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
