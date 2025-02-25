import BackToTop from "@/app/backToTop";
import StudentQuiz from "./(quiz-attempts)";

export const metadata = {
  title:
    "Student Quiz Attempts Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <StudentQuiz />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
