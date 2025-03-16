import BackToTop from "@/app/backToTop";
import QuizWithTimeLayout from "./(timer)";

export const metadata = {
  title:
    "Quiz With Custom Timer - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithTimeLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
