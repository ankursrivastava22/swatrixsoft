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
      <div
        className="rbt-banner-area rbt-banner-8 variation-03 section-bottom-overlay"
        id="home"
      >
        <HomeTechnologyBanner />
        <div className="banner-overlay-section">
          <TeamEight head={false} />
        </div>
      </div>

      <div className="rbt-about-area bg-color-white rbt-section-gap" id="about">
        <div className="container">
          <AboutSaven />
        </div>
      </div>

      <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  EDUCATION FOR EVERYONE
                </span>
                <h2 className="title">Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <Service head={false} />
        </div>
      </div>

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
                    <span className="theme-gradient">Complete guideline</span>
                    from absolute <br /> beginners to getting hired.
                  </h2>
                  <div className="rbt-button-group mt--30">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Explore Course</span>
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
                        <span className="btn-text">Hired List</span>
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
                  <SingleCourseProp courseData={SingleCourseData.certificate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rbt-course-content rbt-section-gap bg-color-extra2"
        id="coursecontent"
      >
        <div className="container">
          <div className="row align-items-end mb--60">
            <div className="col-lg-6 col-md-6">
              <div className="section-title text-start">
                <h2 className="title">Course Content</h2>
                <p className="description has-small-font-size mt--10">
                  32 sections • 376 lectures • 27h 8m total length
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="expend-button text-start text-md-end">
                <Link className="rbt-btn-link w-700" href="#">
                  Expand all sections<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row gy-5 row--30">
            <CourseLessonProp
              courseImg={courseImg}
              courseContent={SingleCourseData.courseContent}
            />
          </div>
        </div>
      </div>

      <div className="rbt-brand-area bg-color-secondary-alt rbt-section-gap">
        <BrandThree />
      </div>

      <div
        className="rbt-video-area bg-color-white rbt-section-gap"
        id="career"
      >
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
                  <h4 className="title">Build your Career Life.</h4>
                  <p className="description mt--30 mt_md--15 mt_sm--15 mb_md--15 mb_sm--15">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="mb_md--15 mb_sm--15">
                    Convenient practice dolor sit adipisicing elit. Minima error
                    reiciendis. far from the countries Vokalia and Consonantia,
                    there live the blind texts far from the countries Vokalia
                    and Consonantia.
                  </p>
                  <div className="view-all-button">
                    <Link
                      className="rbt-btn btn-border hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View All Courses</span>
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

      <div className="thumb-wrapper bg-color-white rbt-section-gapBottom">
        <TestimonialFour />
      </div>

      <div className="thumb-wrapper bg-color-white rbt-section-gapBottom">
        <TeacherGallery />
      </div>

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
