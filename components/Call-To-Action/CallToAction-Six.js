import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";

const CallToActionSix = () => {
  return (
    <div className="container">
      {CallToActionData &&
        CallToActionData.collectionSix.map((data, index) => (
          <div
            className="row g-5 align-items-center content-wrapper"
            key={index}
          >
            <div className="col-xxl-3 col-xl-3 col-lg-6">
              <div className="inner">
                <div className="content text-start">
                  <h2 className="title color-white mb--0">{data.title}</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="inner-content text-start">
                <p className="color-white">{data.desc}</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6">
              <div className="call-to-btn text-start text-xl-end">
                <Link className="rbt-btn btn-white hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Financial Aid</span>
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
        ))}
    </div>
  );
};

export default CallToActionSix;
