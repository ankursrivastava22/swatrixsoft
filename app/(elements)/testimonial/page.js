import BackToTop from "@/app/backToTop";
import TestimonialPage from "./(testimonial)";

export const metadata = {
  title: "Testimonial - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
