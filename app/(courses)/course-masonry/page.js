import BackToTop from "@/app/backToTop";
import CourseMasonryLayout from "./index";

export const metadata = {
  title: "Course Masonry - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const CourseMasonryPage = () => {
  return (
    <>
      <CourseMasonryLayout />

      <BackToTop />
    </>
  );
};

export default CourseMasonryPage;
