import BackToTop from "@/app/backToTop";
import LessonQuizLayout from "./(quiz)";

export const metadata = {
  title: "Lesson Quiz - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
