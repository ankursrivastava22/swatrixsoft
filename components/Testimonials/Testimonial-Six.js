

import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll";

const TestimonialSix = ({ tag }) => {
  return (
    <>
      <div className="col-xl-9">
        <div className="overflow-hidden">
          <Scroll
            testimonial={TestimonialData}
            testimonialData={TestimonialData.testimonialTwo}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialSix;
