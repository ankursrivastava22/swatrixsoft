import React from 'react'

const Maintenance = () => {
  return (
    <div
      className="rbt-countdown-area rbt-maintenance-area bg_image bg_image--6 bg_image_fixed rbt-section-gap vh-100 d-flex align-items-center justify-content-center"
      data-black-overlay="5"
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-12">
            <div className="inner">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  Down For Maintenance
                </span>
                <h2 className="title color-white">
                  Sorry, We are down for Maintenance
                </h2>
                <p className="description has-medium-font-size mt--20 mb--0 color-white opacity-7">
                  We&apos;re currently under maintenance, if all goas as planned
                  we&apos;ll be back in
                </p>
              </div>
              <div className="countdown-style-1 mt--50 justify-content-center">
                <div
                  className="countdown justify-content-center"
                  data-date="2025-12-30"
                >
                  <div className="countdown-container days">
                    <span className="countdown-value">87</span>
                    <span className="countdown-heading">Days</span>
                  </div>
                  <div className="countdown-container hours">
                    <span className="countdown-value">23</span>
                    <span className="countdown-heading">Hours</span>
                  </div>
                  <div className="countdown-container minutes">
                    <span className="countdown-value">38</span>
                    <span className="countdown-heading">Minutes</span>
                  </div>
                  <div className="countdown-container seconds">
                    <span className="countdown-value">27</span>
                    <span className="countdown-heading">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance