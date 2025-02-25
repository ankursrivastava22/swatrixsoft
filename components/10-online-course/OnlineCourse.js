"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import CourseDetails from "../../data/course-details/courseData.json";

import OnlineCourseBanner from "./OnlineCourseBanner";
import TestimonialTwo from "../Testimonials/Testimonial-Two";
import CategoryThree from "../Category/CategoryThree";
import ServiceSaven from "../Services/Service-Saven";
import CourseSix from "../Category/Filter/Course-Six";
import AboutSix from "../Abouts/About-Six";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import NewsletterThree from "../Newsletters/Newsletter-Three";

const OnlineCourse = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
        <div className="wrapper w-100">
          <div className="container">
            <OnlineCourseBanner />
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area rbt-section-gapBottom overflow-hidden mt_dec--120 mt_lp_dec--30 mt_lg_dec--30 mt_md_dec--30 mt_sm_dec--30">
        <TestimonialTwo />
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <CategoryThree />
          </div>
        </div>
      </div>

      <div className="rbt-rbt-course-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center mb--50">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title">
                <h2 className="title">Course Outline</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="load-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient rbt-marquee-btn radius-round"
                  href="#"
                >
                  <span data-text="View All Courses">View All Courses</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            {getAllCourse.slice(0, 4).map((data, index) => (
              <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <Link href={`/course-details/${data.id}`}>
                      <Image
                        src={data.courseImg}
                        width={231}
                        height={324}
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
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
                      <div className="rbt-bookmark-btn">
                        <Link
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="#"
                        >
                          <i className="feather-bookmark"></i>
                        </Link>
                      </div>
                    </div>

                    <h4 className="rbt-card-title">
                      <Link href={`/course-details/${data.id}`}>
                        {data.courseTitle}
                      </Link>
                    </h4>

                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i> {data.lesson} Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i> {data.student}
                        Students
                      </li>
                    </ul>

                    <p className="rbt-card-text">
                      {data.desc.substring(0, 50)}...
                    </p>
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <Link href="#">
                          <Image
                            src={data.userImg}
                            width={33}
                            height={33}
                            alt="Sophia Jaymes"
                          />
                        </Link>
                      </div>
                      <div className="rbt-author-info">
                        By
                        <Link href={`/profile/${data.id}`}>
                          {data.userName}
                        </Link>
                        In <Link href="#">{data.userCategory}</Link>
                      </div>
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
                        Learn More
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <ServiceSaven head={false} />
        </div>
      </div>

      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">Courses</span>
                <h2 className="title">Histudy All Courses</h2>
              </div>
            </div>
          </div>
          <CourseSix />
        </div>
      </div>

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
        <div className="container">
          <AboutSix
            btnClass="btn-gradient radius-round rbt-marquee-btn marquee-text-y"
            btnText="More About Us"
          />
        </div>
      </div>

      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
        <CallToActionSix />
      </div>

      <div className="rbt-contact-me bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-title text-start">
                  <h2 className="title">
                    Want to stay informed about new courses & histudy?
                  </h2>
                  <p className="description mt--20">
                    Histudy educational platform ipsum dolor sit amet
                    consectetur adipisicing elit. Nam inventore praesentium
                    alias incidunt! Veritatis.
                  </p>
                  <div className="social-share-wrapper mt--30">
                    <h5>You can also follow us on:</h5>
                    <ul className="social-icon social-default transparent-with-border justify-content-start mt--30">
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
              </div>
            </div>
            <div className="col-lg-5 offset-xl-1">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <form id="contact-form" className="w-100">
                  <div className="form-group">
                    <input name="con_name" type="text" placeholder="Name" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input name="con_email" type="email" placeholder="Email" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message"></textarea>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      type="submit"
                      className="rbt-btn radius-round btn-gradient hover-icon-reverse"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">GET IT NOW</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
        <NewsletterThree />
      </div>
    </>
  );
};

export default OnlineCourse;
