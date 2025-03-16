import BackToTop from "@/app/backToTop";
import AllQuestionsLayout from "./(question)";

export const metadata = {
  title: "Lesson - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
