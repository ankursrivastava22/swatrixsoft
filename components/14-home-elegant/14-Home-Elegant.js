import React from "react";
import Link from "next/link";

import CardSix from "../Cards/Card-Six";
import CrashCourse from "./CrashCourse";
import TestimonialTwo from "../Testimonials/Testimonial-Two";
import BrandThree from "../Brand/Brand-Three";
import HomeElegantBanner from "./HomeElegantBanner";

const HomeElegant = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-02 with-shape">
        <HomeElegantBanner />
      </div>
      <div className="rbt-courses-area rbt-section-gapBottom bg-color-white mt_dec--100 mt_md_dec--30 mt_sm_dec--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt_dec--50">
              <CardSix
                parentClass="course-card mt--50"
                childClass="rbt-card variation-01 rbt-hover elegant-course card-list-2"
                types="home-elegant"
              />
            </div>
          </div>
        </div>
      </div>

      <CrashCourse />

      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                    People like histudy education. <br /> No joking - here’s the
                    proof!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialTwo />
      </div>

      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">
                    Download our mobile app, <br /> start learning today
                  </h1>
                  <p>Includes all Course && Features</p>
                  <div className="rbt-button-group justify-content-center">
                    <Link className="rbt-btn btn-gradient" href="#">
                      Get Bundle
                    </Link>
                    <Link className="rbt-btn btn-border" href="#">
                      See Features
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <BrandThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeElegant;
