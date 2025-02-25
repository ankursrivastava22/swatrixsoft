import BackToTop from "@/app/backToTop";
import CreateCoursePage from "./index";

export const metadata = {
  title: "Create  Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const CreateCourseLayout = () => {
  return (
    <>
      <CreateCoursePage />

      <BackToTop />
    </>
  );
};

export default CreateCourseLayout;
