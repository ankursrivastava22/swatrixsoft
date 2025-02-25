import React from "react";

const ProgressbarThree = () => {
  return (
    <div className="container">
      <div className="row row--15">
        <div className="col-lg-10 offset-lg-1">
          <div className="rbt-progress-style-1 mt--10">
            <div className="single-progress large-size  no-radius">
              <h6 className="title">Web Development</h6>
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay=".3s"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <span className="progress-number">90%</span>
              </div>
            </div>

            <div className="single-progress large-size  no-radius">
              <h6 className="title">Photoshop Design</h6>
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay=".3s"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <span className="progress-number">75%</span>
              </div>
            </div>

            <div className="single-progress large-size  no-radius">
              <h6 className="title">App Development</h6>
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay=".3s"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <span className="progress-number">95%</span>
              </div>
            </div>

            <div className="single-progress large-size  no-radius">
              <h6 className="title">Application Development</h6>
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  role="progressbar"
                  style={{ width: "45%" }}
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <span className="progress-number">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressbarThree;
