import BackToTop from "@/app/backToTop";
import QuizAttemptsPage from "./(quiz-attempts)";

export const metadata = {
  title:
    "Instructor Quiz Attempts Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <QuizAttemptsPage />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
