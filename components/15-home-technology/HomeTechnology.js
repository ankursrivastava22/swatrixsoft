"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import HomeTechnologyBanner from "./HomeTechnologyBanner";
import TeamEight from "../Team/TeamEight";
import AboutSaven from "../Abouts/About-Saven";
import Service from "../Services/Service";
import BrandThree from "../Brand/Brand-Three";
import SingleCourseProp from "../11-single-course/SingleCourseProp";
import CourseLessonProp from "../11-single-course/CourseLessonProp";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import TeacherGallery from "../Become-a-Teacher/TeacherGallery";
import NewsletterFour from "../Newsletters/Newsletter-Four";

import SingleCourseData from "../../data/pages/11-singleCourse.json";

import courseImg from "../../public/images/course/course-content.jpg";
import videoImg from "../../public/images/others/video-05.jpg";

const HomeTechnology = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div
        className="rbt-banner-area rbt-banner-8 variation-03 section-bottom-overlay"
        id="home"
      >
        <HomeTechnologyBanner />
        <div className="banner-overlay-section">
          {/* Team section (optional) */}
          <TeamEight head={false} />
        </div>
      </div>

      {/* About Section */}
      <div className="rbt-about-area bg-color-white rbt-section-gap" id="about">
        <div className="container">
          <AboutSaven />
        </div>
      </div>

      {/* Services Section */}
      <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  ALL-IN-ONE IT SOLUTIONS
                </span>
                <h2 className="title">Why Choose Swatrixsoft?</h2>
              </div>
            </div>
          </div>
          {/* Services component */}
          <Service head={false} />
        </div>
      </div>

      {/* Comprehensive Solutions Section */}
      <div
        className="rbt-course-banner-area rbt-section-gap bg-color-white"
        id="guideline"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center mb--60">
                  <h2 className="title">
                    <span className="theme-gradient">Complete Solutions</span>
                    from Initial Planning <br /> to Final Launch
                  </h2>
                  <div className="rbt-button-group mt--30">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Explore Services</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    <Link
                      className="rbt-btn hover-icon-reverse btn-border"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Our Portfolio</span>
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
                <div className="row g-5">
                  {/* Example usage of SingleCourseProp if you still want to show "certificate" data */}
                  <SingleCourseProp courseData={SingleCourseData.certificate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service / LMS Content Section */}

      {/* Brand / Partners Section */}
      <div className="rbt-brand-area bg-color-secondary-alt rbt-section-gap">
        <BrandThree />
      </div>

      {/* Video Section */}
      <div className="rbt-video-area bg-color-white rbt-section-gap" id="career">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg}
                  width={638}
                  height={398}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player popup-video position-to-top"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  data-vbtype="video"
                  controls
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_lg--0 pl_md--0 pl_sm--0">
                <div className="section-title text-start">
                  <h4 className="title">Transform Your Digital Presence</h4>
                  <p className="description mt--30 mt_md--15 mt_sm--15 mb_md--15 mb_sm--15">
                    We provide end-to-end IT solutions, from initial planning
                    and development to post-launch marketing and support.
                    Whether you’re a startup or an established enterprise, our
                    team is here to elevate your online footprint.
                  </p>
                  <p className="mb_md--15 mb_sm--15">
                    Let us handle the complexities of web & app development,
                    digital marketing strategies, and even LMS platforms—so you
                    can focus on what you do best: growing your business.
                  </p>
                  <div className="view-all-button">
                    <Link
                      className="rbt-btn btn-border hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View All Services</span>
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
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="thumb-wrapper bg-color-white rbt-section-gapBottom">
        <TestimonialFour />
      </div>

      {/* Teacher / Team Gallery (If you still want to highlight LMS or your team) */}
      <div className="thumb-wrapper bg-color-white rbt-section-gapBottom">
        <TeacherGallery />
      </div>

      {/* Newsletter / Contact Section */}
      <div className="rbt-newsletter-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <NewsletterFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTechnology;
