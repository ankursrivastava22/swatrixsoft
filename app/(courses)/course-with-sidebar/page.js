import BackToTop from "@/app/backToTop";
import CourseWithSidebarLayout from "./index";

export const metadata = {
  title: "Course With Sidebar - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CourseWithSidebarPage = () => {
  return (
    <>
      <CourseWithSidebarLayout />

      <BackToTop />
    </>
  );
};

export default CourseWithSidebarPage;
