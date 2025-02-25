import BackToTop from "@/app/backToTop";
import LessonQuizResultLayout from "./(quiz-result)";

export const metadata = {
  title: "Lesson Quiz Result - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
