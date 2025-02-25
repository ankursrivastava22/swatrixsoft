import BackToTop from "@/app/backToTop";
import QuizWithPoinLayout from "./(point)";

export const metadata = {
  title:
    "Quiz with individual point - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
