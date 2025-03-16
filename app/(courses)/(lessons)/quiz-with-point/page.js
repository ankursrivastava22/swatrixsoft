import BackToTop from "@/app/backToTop";
import QuizWithPoinLayout from "./(point)";

export const metadata = {
  title:
    "Quiz with individual point - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithPoinLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
