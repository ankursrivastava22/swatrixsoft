import BackToTop from "@/app/backToTop";
import StudentReviews from "./(reviews)";

export const metadata = {
  title:
    "Student Reviews Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
