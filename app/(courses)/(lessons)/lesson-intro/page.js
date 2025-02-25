import BackToTop from "@/app/backToTop";
import LessonIntroPage from "./(intro)";

export const metadata = {
  title: "Lesson Intro - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
