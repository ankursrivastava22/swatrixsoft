import Image from "next/image";

import author1 from "../../../public/images/testimonial/testimonial-1.jpg";
import author2 from "../../../public/images/testimonial/testimonial-2.jpg";
import author3 from "../../../public/images/testimonial/testimonial-3.jpg";

const Avatars = () => {
  return (
    <div
      id="avatars"
      className="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
    >
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Avatars</h4>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto size-lg">
              <Image src={author1} alt="Author Images" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto">
              <Image src={author2} alt="Author Images" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto size-sm">
              <Image src={author3} alt="Author Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
