import BackToTop from "@/app/backToTop";
import LessonQuizLayout from "./(quiz)";

export const metadata = {
  title: "Lesson Quiz - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LessonQuizPage = () => {
  return (
    <>
      <LessonQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizPage;
