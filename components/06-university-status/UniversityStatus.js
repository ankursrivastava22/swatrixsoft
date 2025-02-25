"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import AboutThree from "../Abouts/About-Three";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import CounterSix from "../Counters/Counter-Six";
import Split from "../Split/Split";
import AboutFour from "../Abouts/About-Four";

import CourseDetails from "../../data/course-details/courseData.json";
import CourseCardThree from "../Category/Filter/CourseCard-Three";
import ServiceThree from "../Services/Service-Three";
import ServiceTwelve from "../Services/Service-Twelve";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import Course from "../Accordions/Course";
import CallToActionFour from "../Call-To-Action/CallToAction-Four";
import Image from "next/image";

const UniversityStatus = () => {
  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 6))
  );

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="slider-area rbt-banner-5 height-750 bg_image bg_image--3"
        data-gradient-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one">
                  Start Your
                  <span>Career &amp; </span>
                  <span>Pursue</span> Your Passion.
                </h1>
                <p className="description">
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials.
                </p>
                <div className="rbt-button-group">
                  <Link
                    className="rbt-btn btn-white hover-icon-reverse"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">View Our Program</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                  <Link
                    className="rbt-btn btn-border hover-icon-reverse color-white"
                    href="/contact"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Contact Us</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
        <div className="container">
          <AboutThree />
        </div>
      </div>

      <div className="rbt-advance-tab-area bg-gradient-2 rbt-section-gapTop">
        <div className="container">
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  University Status
                </span>
                <h2 className="title">University Overview.</h2>
              </div>
            </div>
          </div>
          <AdvanceTabFour head={false} />
        </div>
      </div>

      <div className="rbt-counterup-area bg-color-white rbt-section-gapTop">
        <div className="container">
          <CounterSix head={false} />
        </div>
      </div>

      <div className="rbt-split-area bg-color-white rbt-section-gapTop overflow-hidden">
        <div className="wrapper">
          <div className="rbt-splite-style">
            <div className="split-wrapper">
              <Split />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
        <div className="wrapper">
          <div className="container">
            <AboutFour />
          </div>
        </div>
        <div className="wrapper mt--60">
          <div className="container">
            <div className="row g-5">
              <CourseCardThree course={getAllCourse} />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-service-area bg-gradient-2 rbt-section-gapTop">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">ONLINE COURSE</span>
                <h2 className="title">Our Online Course</h2>
              </div>
            </div>
          </div>
          <ServiceThree head={false} />
        </div>
      </div>

      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <h4 className="title">How to Apply</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">
                    View All Requirements
                  </span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <ServiceTwelve head={false} />
        </div>
      </div>

      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
        <CallToActionSix />
      </div>

      <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
        <Course title="Tuition & Fees" tag="COURSE PRICING" />
      </div>

      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-color-white">
        <div className="container">
          <div className="row mb--55 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-secondary-opacity">
                  Latest News
                </span>
                <h2 className="title">Have a look on our news</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">View All News</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {CourseDetails &&
              CourseDetails.courseDetails.slice(0, 3).map((data, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                  <div className="rbt-card variation-02 rbt-hover">
                    <div className="rbt-card-img">
                      <Link href={`/course-details/${data.id}`}>
                        <Image
                          src={data.courseImg}
                          width={415}
                          height={246}
                          alt="Card image"
                        />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <Link href={`/course-details/${data.id}`}>
                          {data.courseTitle}
                        </Link>
                      </h5>
                      <p className="rbt-card-text">
                        {data.desc.substring(0, 38)}...
                      </p>
                      <div className="rbt-card-bottom">
                        <Link
                          className="transparent-button"
                          href={`/course-details/${data.id}`}
                        >
                          Learn More
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                <path
                                  strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                ></path>
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="rbt-callto-action-area rbt-section-gapTop">
        <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75 ">
          <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
        </div>
      </div>
    </>
  );
};

export default UniversityStatus;
