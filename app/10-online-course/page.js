import BackToTop from "../backToTop";
import OnlineCoursePage from "./(online-course)";

export const metadata = {
  title: "Online Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
