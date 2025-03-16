import BackToTop from "@/app/backToTop";
import ReviewPage from "./(reviews)";

export const metadata = {
  title:
    "Instructor Reviews Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
