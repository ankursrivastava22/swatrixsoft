import BackToTop from "@/app/backToTop";
import CreateCoursePage from "./index";

export const metadata = {
  title: "Create  Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
