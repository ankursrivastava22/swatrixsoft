import BackToTop from "@/app/backToTop";
import LessonQuizResultLayout from "./(quiz-result)";

export const metadata = {
  title: "Lesson Quiz Result - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonQuizResultPage = () => {
  return (
    <>
      <LessonQuizResultLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizResultPage;
