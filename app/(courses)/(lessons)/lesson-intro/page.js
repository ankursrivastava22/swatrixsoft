import BackToTop from "@/app/backToTop";
import LessonIntroPage from "./(intro)";

export const metadata = {
  title: "Lesson Intro - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LessonIntroLayout = () => {
  return (
    <>
      <LessonIntroPage />
      <BackToTop />
    </>
  );
};

export default LessonIntroLayout;
