import BackToTop from "@/app/backToTop";
import QuizAttemptsPage from "./(quiz-attempts)";

export const metadata = {
  title:
    "Instructor Quiz Attempts Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
