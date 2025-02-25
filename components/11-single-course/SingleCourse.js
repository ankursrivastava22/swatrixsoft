"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import SingleCourseData from "../../data/pages/11-singleCourse.json";
import TeamData from "../../data/elements/team.json";

import SingleCourseBanner from "./SingleCourseBanner";
import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import PricingFive from "../Pricing/Pricing-Five";
import NewsletterFour from "../Newsletters/Newsletter-Four";
import SingleCourseProp from "./SingleCourseProp";

import courseImg from "../../public/images/course/course-elegant-01.jpg";
import CourseLessonProp from "./CourseLessonProp";

const SingleCourse = () => {
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
        className="slider-area rbt-banner-9 bg-gradient-2 header-transperent-spacer"
        style={{ paddingTop: 80 }}
      >
        <div className="container">
          <SingleCourseBanner />
        </div>
      </div>

      <div className="rbt-feature-area rbt-single-course-features rbt-section-gapBottom rbt-feature-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 gy-5 align-items-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="thumbnail rbt-shadow-box">
                    {SingleCourseData &&
                      SingleCourseData.courseFeatureBox.map((data, index) => (
                        <Image
                          className="w-100 radius-10"
                          src={data.img}
                          key={index}
                          width={357}
                          height={500}
                          alt="Card image"
                        />
                      ))}
                  </div>
                </div>
                {SingleCourseData &&
                  SingleCourseData.courseFeatureBox.map((data, index) => (
                    <div className="col-lg-6 col-xl-7" key={index}>
                      <div className="section-title">
                        <h2 className="title">{data.title}</h2>
                        <p className="b1 mt--15">{data.desc}</p>
                      </div>

                      <div className="section-title subtitle">
                        <h5 className="title">Whats Material Includes?</h5>
                      </div>

                      <div className="row g-5">
                        <div className="col-lg-6">
                          <ul className="rbt-list-style-1">
                            {data.featureList
                              .slice(0, 5)
                              .map((innerData, innerIndex) => (
                                <li key={innerIndex}>
                                  <i className="feather-check"></i>
                                  {innerData.text}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="rbt-list-style-1">
                            {data.featureList
                              .slice(5, 10)
                              .map((innerData, innerIndex) => (
                                <li key={innerIndex}>
                                  <i className="feather-check"></i>
                                  {innerData.text}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>

                      <div className="read-more-btn mt--40">
                        <Link className="rbt-moderbt-btn" href="#">
                          <span className="moderbt-btn-text">
                            Learn More About Us
                          </span>
                          <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-banner-area rbt-section-gap bg-color-darker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center mb--60">
                  <h2 className="title color-white">
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
                      className="rbt-btn hover-icon-reverse btn-border color-white-off"
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
                  <SingleCourseProp
                    courseData={SingleCourseData.certificate}
                    image={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-content rbt-section-gap bg-color-extra2">
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
          <CourseLessonProp
            courseImg={courseImg}
            courseContent={SingleCourseData.courseContent}
          />
        </div>
      </div>

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
        <TestimonialSeven />
      </div>

      <div className="rbt-pricing-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5 mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">Plans For This Course</h2>
                <p className="description mt--20">
                  See this our three main plans for our histudy courses. It
                  starts from here! You can teach yourself what you really like.
                </p>
              </div>
            </div>
          </div>
          <PricingFive />
        </div>
      </div>

      <div className="rbt-author-area bg-gradient-8 rbt-section-gap">
        <div className="container">
          <div className="rbt-instructor">
            <div className="single-course-author">
              {TeamData &&
                TeamData.team.slice(0, 1).map((data, index) => (
                  <div className="media row align-items-center g-5" key={index}>
                    <div className="col-lg-3 col-xl-3 offset-xl-2">
                      <div className="thumbnail">
                        <Link href="#">
                          <Image
                            className="radius-10 w-100"
                            src={data.img}
                            width={304}
                            height={308}
                            alt="Author Images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {data.details.map((innerData, i) => (
                        <div className="media-body ml--15" key={i}>
                          <div className="author-info text-left">
                            <h2 className="title color-white mb--0">
                              {innerData.name}
                            </h2>
                            <span className="b3 color-white">
                              {innerData.type}
                            </span>
                          </div>
                          <div className="content mt--20">
                            <p className="description color-white">
                              {innerData.desc}
                            </p>
                            <ul className="social-icon color-white social-default transparent-with-border justify-content-start mt--15">
                              <li>
                                <Link href="https://www.facebook.com/">
                                  <i className="feather-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.twitter.com">
                                  <i className="feather-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/">
                                  <i className="feather-instagram"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.linkdin.com/">
                                  <i className="feather-linkedin"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-newsletter-area bg-color-white rbt-section-gap">
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

export default SingleCourse;
