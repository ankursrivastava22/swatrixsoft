"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import CourseDetails from "../../data/course-details/courseData.json";
import EventData from "../../data/events.json";

import ServiceThree from "../Services/Service-Three";
import CourseTagTwo from "../Common/CourseTag-Two";
import TeamSix from "../Team/TeamSix";
import TestimonialThree from "../Testimonials/Testimonial-Three";
import Events from "../Events/Events";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import NewsletterThree from "../Newsletters/Newsletter-Three";

const CourseSchool = ({ blogs }) => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

  const [courseFilter, setCourseFilter] = useState(getAllCourse);
  const [activeTab, setActiveTab] = useState("All Course");

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  const handleButtonClick = (courseType) => {
    setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    filterItem(courseType);
  };

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="rbt-banner-area rbt-banner-2 header-transperent-spacer"
        style={{ paddingTop: 127 }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content text-center">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one mb--30">
                      <span className="rbt-new-badge-icon">🏆</span> The Leader
                      in Online Learning
                    </div>
                    <h1 className="title">
                      We teaching, educate and
                      <span className="theme-gradient">build the future</span>
                      of online learning
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <ServiceThree head={false} />
          </div>
        </div>
      </div>

      <div className="rbt-course-area bg-color-white rbt-section-gapTop masonary-wrapper-activation">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Popular Course
                </span>
                <h2 className="title">
                  Online Coaching Lessons For <br /> Remote Learning
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul
                className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
                id="rbt-myTab"
                role="tablist"
              >
                {[
                  "All Course",
                  "featured",
                  "popular",
                  "trending",
                  "latest",
                ].map((courseType, index) => (
                  <li key={index} className="nav-item" role="presentation">
                    <button
                      className={activeTab === courseType ? "active" : ""}
                      type="button"
                      onClick={() => handleButtonClick(courseType)}
                    >
                      <span className="filter-text">{courseType}</span>
                      {courseType === "All Course" ? (
                        <span className="course-number">
                          {getAllCourse.filter((course) => course).length}
                        </span>
                      ) : (
                        <span className="course-number">
                          0
                          {
                            getAllCourse.filter(
                              (course) => course.courseType === courseType
                            ).length
                          }
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content mt--60" id="rbt-myTabContent">
                <div className="row g-5">
                  {courseFilter.slice(0, 6).map((data, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12"
                      key={index}
                    >
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
                              <i className="feather-book"></i> {data.lesson}
                              Lessons
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
                              <span className="current-price">
                                ${data.price}
                              </span>
                              <span className="off-price">
                                ${data.offPrice}
                              </span>
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
          </div>
        </div>
      </div>

      <div className="rbt-course-category rbt-section-gap overflow-hidden">
        <div className="container">
          <div className="row mb--25">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="subtitle bg-secondary-opacity">
                  Histudy Feature Category
                </h5>
              </div>
            </div>
          </div>
          <CourseTagTwo />
        </div>
      </div>

      <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">Our Instructor</span>
                <h2 className="title">Word Class Best Instructor</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <TeamSix isHead={false} />
        </div>
      </div>

      <TestimonialThree
        isStar={true}
        bgClass="bg-gradient-7 text-white"
        designation="designation"
        subTitleBg="bg-coral-opacity"
      />

      <div className="rbt-event-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">OUR EVENTS</span>
                <h2 className="title">University Upcoming Events</h2>
              </div>
            </div>
          </div>
          <Events
            isPagination={false}
            parentClass="card-list-2 event-list-card"
            childClass="col-lg-6 col-md-6 col-12"
            getEvents={EventData}
            start={0}
            end={4}
          />
        </div>
      </div>

      <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
        <div className="container">
          <div className="row g-5 align-items-center mb--30">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title">
                <span className="subtitle bg-pink-opacity">Blog Post</span>
                <h2 className="title">Post Popular Post.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="/blog-list"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">See All Articles</span>
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
          <BlogGridTop BlogData={blogs} />
        </div>
      </div>

      <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
        <NewsletterThree />
      </div>
    </>
  );
};

export default CourseSchool;
