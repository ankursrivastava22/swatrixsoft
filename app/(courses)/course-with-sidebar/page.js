import BackToTop from "@/app/backToTop";
import CourseWithSidebarLayout from "./index";

export const metadata = {
  title: "Course With Sidebar - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
