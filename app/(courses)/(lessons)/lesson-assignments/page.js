import BackToTop from "@/app/backToTop";
import LessonAssignmentPage from "./(lesson-assignments)";

export const metadata = {
  title: "Lesson Assignment - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonAssignmentLayout = () => {
  return (
    <>
      <LessonAssignmentPage />
      <BackToTop />
    </>
  );
};

export default LessonAssignmentLayout;
