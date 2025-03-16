import BackToTop from "@/app/backToTop";
import StudentQuiz from "./(quiz-attempts)";

export const metadata = {
  title:
    "Student Quiz Attempts Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
