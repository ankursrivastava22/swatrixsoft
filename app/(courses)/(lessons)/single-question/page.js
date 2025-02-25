import BackToTop from "@/app/backToTop";
import SingleQuestionLayout from "./(single)";

export const metadata = {
  title: "Single Question - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
