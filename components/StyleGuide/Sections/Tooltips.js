import Link from "next/link";
import Image from "next/image";

import client1 from "../../../public/images/testimonial/client-04.png";
import client2 from "../../../public/images/testimonial/client-05.png";
import client3 from "../../../public/images/testimonial/client-06.png";

const Tooltips = () => {
  return (
    <div
      id="tooltips"
      className="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
    >
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Tooltips</h4>
        </div>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="profile-share">
              <Link
                href="#"
                className="avatar"
                data-tooltip="Mark JOrdan"
                tabIndex="0"
              >
                <Image src={client1} alt="education" />
              </Link>
              <Link
                href="#"
                className="avatar"
                data-tooltip="Mark"
                tabIndex="0"
              >
                <Image src={client2} alt="education" />
              </Link>
              <Link
                href="#"
                className="avatar"
                data-tooltip="Jordan"
                tabIndex="0"
              >
                <Image src={client3} alt="education" />
              </Link>
              <div className="more-author-text">
                <h5 className="total-join-students">
                  Join Over 3000+ Students
                </h5>
                <p className="subtitle">Have a new ideas every week.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;
