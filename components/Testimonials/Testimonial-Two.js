import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll";

const TestimonialTwo = () => {
  return (
    <>
      <Scroll
        testimonial={TestimonialData}
        testimonialData={TestimonialData.testimonialTwo}
      />
    </>
  );
};

export default TestimonialTwo;
