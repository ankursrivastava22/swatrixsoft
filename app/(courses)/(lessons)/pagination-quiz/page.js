import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "./(pagination)";

export const metadata = {
  title: "Pagination Quiz - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
