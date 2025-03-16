import BackToTop from "@/app/backToTop";
import SingleQuestionLayout from "./(single)";

export const metadata = {
  title: "Single Question - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonLayout = () => {
  return (
    <>
      <SingleQuestionLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
