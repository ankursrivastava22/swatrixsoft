import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";
import CallToActionHead from "./CallToAction-Head";

const CallToActionThree = () => {
  return (
    <>
      {CallToActionData &&
        CallToActionData.collectionThree.map((data, index) => (
          <div
            className="rbt-callto-action-area bg-color-white rbt-section-gap"
            key={index}
          >
            <CallToActionHead tag={data.tag} title={data.title} />
            <div className="rbt-callto-action rbt-cta-default style-3">
              <div className="container content-wrapper">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-8">
                    <div className="inner">
                      <div className="content text-left">
                        <h2 className="title">
                          Ready to start creating a standard website?
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="call-to-btn text-start text-lg-end">
                      <Link className="rbt-btn bg-white-opacity icon-hover" href="#">
                        <span className="btn-text">Purchase Histudy</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CallToActionThree;
