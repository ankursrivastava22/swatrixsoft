import BackToTop from "@/app/backToTop";
import AllQuestionsLayout from "./(question)";

export const metadata = {
  title: "Lesson - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LessonLayout = () => {
  return (
    <>
      <AllQuestionsLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
