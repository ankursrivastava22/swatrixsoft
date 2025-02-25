import BackToTop from "@/app/backToTop";
import ReviewPage from "./(reviews)";

export const metadata = {
  title:
    "Instructor Reviews Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ReviewLayout = () => {
  return (
    <>
      <ReviewPage />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
