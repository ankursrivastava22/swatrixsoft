import BackToTop from "@/app/backToTop";
import QuizWithTimeLayout from "./(timer)";

export const metadata = {
  title:
    "Quiz With Custom Timer - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
