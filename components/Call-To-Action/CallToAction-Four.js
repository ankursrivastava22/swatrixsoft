import Image from "next/image";
import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";

const CallToActionFour = ({ btnClass }) => {
  return (
    <>
      <div className="container">
        {CallToActionData &&
          CallToActionData.collectionFour.map((data, index) => (
            <div
              className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative"
              key={index}
            >
              <div className="col-lg-8 mt--30 offset-lg-3">
                <div className="inner">
                  <div className="content text-left">
                    <h2 className="title" data-sal="slide-up">
                      {data.title}
                    </h2>
                    <div className="call-to-btn text-start mt--30">
                      <Link className={btnClass} href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Purchase Histudy</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumbnail">
                <Image
                  className="w-100"
                  src={data.img}
                  width={272}
                  height={386}
                  alt="Shape Images"
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CallToActionFour;
