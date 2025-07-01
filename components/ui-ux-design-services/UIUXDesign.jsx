import React from "react";
import Image from "next/image";
// import designImg from "../../public/images/ui-ux-design/ui-ux-design.jpg";

const UIUXDesign = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-5">
        <div className="content">
          {/* <Image
            className="w-100 radius-10"
            src={designImg}
            width={526}
            height={645}
            alt="UI/UX Design Services by Swatrixsoft"
          /> */}
        </div>
      </div>
      <div className="col-lg-7">
        <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
          <div className="section-title text-start">
            <h2 className="title">UI/UX Design Services</h2>

            <p className="description mt--20">
              At <strong>Swatrixsoft</strong>, our UI/UX experts craft visually appealing and user-centric designs to boost engagement and conversions. We blend user insights with creative innovation to deliver seamless digital experiences across web, mobile, and SaaS platforms.
            </p>

            <h5 className="mb--20">What We Offer:</h5>
            <div className="plan-offer-list-wrapper">
              <ul className="plan-offer-list">
                <li><i className="feather-check"></i> User Research & Analysis</li>
                <li><i className="feather-check"></i> Wireframes & Prototyping</li>
                <li><i className="feather-check"></i> Mobile & Web Interface Design</li>
                <li><i className="feather-check"></i> Interaction & Micro-interactions</li>
                <li><i className="feather-check"></i> Accessibility Compliance (WCAG)</li>
                <li><i className="feather-check"></i> Design Systems & Component Libraries</li>
              </ul>

              <ul className="plan-offer-list">
                <li><i className="feather-check"></i> Responsive & Adaptive Design</li>
                <li><i className="feather-check"></i> Conversion-Focused UI Design</li>
                <li><i className="feather-check"></i> Usability Testing & Iteration</li>
                <li><i className="feather-check"></i> Figma, Adobe XD, Sketch Expertise</li>
                <li><i className="feather-check"></i> Landing Pages & Campaign Designs</li>
                <li><i className="feather-check"></i> Continuous Design Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;
