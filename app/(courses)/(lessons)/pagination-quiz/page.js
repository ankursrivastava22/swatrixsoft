import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "./(pagination)";

export const metadata = {
  title: "Pagination Quiz - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LessonLayout = () => {
  return (
    <>
      <PaginationQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
