import BackToTop from "../backToTop";
import OnlineCoursePage from "./(online-course)";

export const metadata = {
  title: "Online Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const OnlineCourseLayout = () => {
  return (
    <>
      <OnlineCoursePage />
      <BackToTop />
    </>
  );
};

export default OnlineCourseLayout;
