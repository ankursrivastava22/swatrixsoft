import BackToTop from "@/app/backToTop";
import TestimonialPage from "./(testimonial)";

export const metadata = {
  title: "Testimonial - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const TestimonialLayout = () => {
  return (
    <>
      <TestimonialPage />

      <BackToTop />
    </>
  );
};

export default TestimonialLayout;
