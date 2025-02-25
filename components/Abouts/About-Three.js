import Link from "next/link";

import AboutData from "../../data/elements/about.json";

const AboutThree = () => {
  return (
    <>
      {AboutData &&
        AboutData.aboutThree.map((data, index) => (
          <div className="row g-5 align-items-start" key={index}>
            <div className="col-lg-6">
              <div className="content">
                <h2
                  className="title mb--0"
                  data-sal="slide-up"
                  data-sal-duration="700"
                >
                  {data.title}
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <p className="mb--40 mb_sm--20">{data.desc}</p>
              <div className="readmore-btn">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">University Overview</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutThree;
