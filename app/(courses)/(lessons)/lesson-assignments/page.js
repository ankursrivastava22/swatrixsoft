import BackToTop from "@/app/backToTop";
import LessonAssignmentPage from "./(lesson-assignments)";

export const metadata = {
  title: "Lesson Assignment - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
