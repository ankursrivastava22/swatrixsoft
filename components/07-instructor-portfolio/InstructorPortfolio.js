import Link from "next/link";
import React from "react";
import Image from "next/image";

import AboutFive from "../Abouts/About-Five";
import CategoryEight from "../Category/CategoryEight";

import CourseDetails from "../../data/course-details/courseData.json";

import callImg from "../../public/images/shape/cta-4.png";
import CounterSix from "../Counters/Counter-Six";
import PricingFive from "../Pricing/Pricing-Five";
import TestimonialSix from "../Testimonials/Testimonial-Six";
import InstructorForm from "./InstructorForm";
import NewsletterThree from "../Newsletters/Newsletter-Three";

const InstructorPortfolio = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
  return (
    <>
      <div
        className="slider-area rbt-banner-6 variation-01 bg_image bg_image--14 header-transperent-spacer"
        data-black-overlay="7"
        style={{ paddingTop: 132 }}
      >
        <div className="wrapper w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <div className="badge-top mb--30">
                    <span className="rbt-badge">Histudy Badge</span>
                  </div>
                  <h1 className="title">
                    Hey! Build Your <span className="theme-gradient">Life</span>
                    <strong>With John Lee</strong>
                  </h1>
                  <div className="button-group mt--30">
                    <Link
                      className="rbt-btn btn-gradient rbt-marquee-btn"
                      href="#"
                    >
                      <span data-text="Get Started Today">
                        Get Started Today
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-style-2 rbt-section-gapBottom">
        <AboutFive />
      </div>

      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">Courses</span> Category
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <CategoryEight />
          </div>
        </div>
      </div>

      <div className="rbt-callto-action-area">
        <div className="rbt-callto-action rbt-cta-default style-4 variation-2 bg-gradient-6 mt--75">
          <div className="container">
            <div className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative">
              <div className="col-lg-8 mt--30 offset-lg-3">
                <div className="inner">
                  <div className="content text-left">
                    <h2 className="title">
                      Ready to start creating a Educational Website?
                    </h2>
                    <div className="call-to-btn text-start mt--30">
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Purchase Histudy</span>
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
              <div className="thumbnail">
                <Image
                  className="w-100"
                  width={326}
                  height={293}
                  src={callImg}
                  alt="Shape Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">New</span> Online Courses
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {CourseDetails &&
              getAllCourse.slice(0, 3).map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <Link href={`/course-details/${data.id}`}>
                        <Image
                          src={data.courseImg}
                          width={355}
                          height={244}
                          alt="Card image"
                        />
                        {data.offPrice > 0 ? (
                          <div className="rbt-badge-3 bg-white">
                            <span>-{data.offPrice}%</span>
                            <span>Off</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <ul className="rbt-meta">
                        <li>
                          <i className="feather-book"></i>
                          {data.lesson} Lessons
                        </li>
                        <li>
                          <i className="feather-users"></i>
                          {data.student} Students
                        </li>
                      </ul>
                      <h4 className="rbt-card-title">
                        <Link href={`/course-details/${data.id}`}>
                          {data.courseTitle}
                        </Link>
                      </h4>
                      <p className="rbt-card-text">{data.desc}</p>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">
                          ({data.review} Reviews)
                        </span>
                      </div>
                      <div className="rbt-card-bottom">
                        <div className="rbt-price">
                          <span className="current-price">${data.price}</span>
                          <span className="off-price">${data.offPrice}</span>
                        </div>
                        <Link
                          className="rbt-btn-link"
                          href={`/course-details/${data.id}`}
                        >
                          Learn More<i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area bg-gradient-6 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">Why</span> Choose My Courses
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <CounterSix head={false} />
        </div>
      </div>

      <div className="rbt-pricing-area bg-color-white rbt-section-gapTop">
        <div className="container">
          <div className="row g-5 mb--60">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">My</span> Courses Plan
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <PricingFive />
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-white ptb--100 overflow-hidden">
        <div className="container-fluid">
          <div className="row g-5 align-items-center">
            <div className="col-xl-3">
              <div className="section-title pl--100 pl_sm--30">
                <h2 className="title">
                  What My Learners <span className="theme-gradient">Say</span>
                </h2>
                <p className="description mt--20">
                  Learning communicate to global world and build a bright future
                  with our histudy.
                </p>
                <div className="veiw-more-btn mt--20">
                  <Link
                    className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                    href="#"
                  >
                    <span data-text="Learn More">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <TestimonialSix />
          </div>
        </div>
      </div>

      <div className="rbt-contact-me bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">Contact</span> With Me
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <InstructorForm />
          </div>
        </div>
      </div>

      <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
        <NewsletterThree />
      </div>
    </>
  );
};

export default InstructorPortfolio;
