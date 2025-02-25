import BackToTop from "@/app/backToTop";
import StudentReviews from "./(reviews)";

export const metadata = {
  title:
    "Student Reviews Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ReviewLayout = () => {
  return (
    <>
      <StudentReviews />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
