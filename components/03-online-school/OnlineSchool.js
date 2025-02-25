"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";
import { motion } from "framer-motion";

import CallToActionFive from "../Call-To-Action/CallToAction-Five";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";

import EventData from "../../data/events.json";

import shapeImg from "../../public/images/icons/three-shape.png";
import Link from "next/link";
import TestimonialTwo from "../Testimonials/Testimonial-Two";
import TeamTen from "../Team/TeamTen";
import Events from "../Events/Events";
import ServiceTen from "../Services/Service-Ten";
import CounterFive from "../Counters/Counter-Five";
import ServiceNine from "../Services/Service-Nine";
import Card from "../Cards/Card";
import CategoryThree from "../Category/CategoryThree";

import rightShape from "../../public/images/banner/right-shape.png";
import topShape from "../../public/images/banner/top-shape.png";
import client1 from "../../public/images/testimonial/client-03.png";
import client2 from "../../public/images/testimonial/client-04.png";
import client3 from "../../public/images/testimonial/client-06.png";
import OnlineSchoolForm from "./OnlineSchoolForm";
import CourseSix from "../Category/Filter/Course-Six";

const OnlineSchool = ({ blogs }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      <div
        className="rbt-banner-area rbt-banner-3 header-transperent-spacer"
        style={{ paddingTop: 80 }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className="banner-content ">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">
                        THE BEST THEME FOR
                      </span>
                    </div>
                    <h1 className="title">
                      Online Learning <br /> Managemnt System
                    </h1>
                    <p className="description">
                      We are experienced in educationl platform and skilled
                      strategies for the success of our online learning.
                    </p>
                    <div className="rating mb--20">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="RainbowIT"
                          tabIndex="0"
                        >
                          <Image
                            src={client1}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabIndex="0"
                        >
                          <Image
                            src={client2}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabIndex="0"
                        >
                          <Image
                            src={client3}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <OnlineSchoolForm />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-wrapper">
          <div className="left-shape">
            <Image
              src={rightShape}
              width={1205}
              height={808}
              alt="Banner Images"
            />
          </div>
          <div className="top-shape">
            <Image
              src={topShape}
              width={1163}
              height={156}
              alt="Banner Images"
            />
          </div>
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className="marque-images edumarque"></div>
          </motion.div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Course Category
                </span>
                <h2 className="title">
                  Let the journey of organizing <br /> your own learning begin
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryThree />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="read-more-btn text-center mt--40">
                <Link
                  className="rbt-btn btn-border-gradient hover-icon-reverse radius-round btn-md"
                  href="archive"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL CATEGORIES</span>
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

      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Live Course</span>
                <h2 className="title">Special live course</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL COURSES</span>
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
          <div className="row g-5">
            <Card
              col="col-lg-4 col-md-6 col-sm-6 col-12"
              mt="mt--30"
              start={0}
              end={3}
              isDesc={true}
              isUser={true}
            />
          </div>
        </div>
      </div>

      <div className="service-wrapper bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">
                  Histudy Feature
                </span>
                <h2 className="title">
                  Check out Histudy&apos;s features <br /> to win any exam
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ServiceNine head={false} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="rbt-counterup-area bg_image bg_image_fixed bg_image--18 ptb--170 ptb_md--50 ptb_sm--50 bg-black-overlay"
        data-black-overlay="1"
      >
        <CounterFive />
      </div>

      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Exam Preparation
                </span>
                <h2 className="title">Annual Exam Preparation</h2>
              </div>
            </div>
          </div>
          <ServiceTen />
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

      <div className="rbt-events-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Our Events</span>
                <h2 className="title">Histudy Events</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL EVENTS</span>
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
          <Events
            start={0}
            end={4}
            isPagination={false}
            parentClass="card-list-2 event-list-card"
            childClass="col-lg-6 col-md-6 col-12"
            getEvents={EventData}
          />
        </div>
      </div>

      <div className="rbt-team-area bg-gradient-8 rbt-section-gap">
        <TeamTen />
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
        <TestimonialTwo />
      </div>

      <div className="rbt-rbt-blog-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--30 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Our Blog</span>
                <h2 className="title">Histudy Blog</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="blog"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL POST</span>
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
      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-6 rbt-call-to-action-5">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <CallToActionFive />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-images">
          <Image src={shapeImg} width={547} height={398} alt="Shape Images" />
        </div>
      </div>
    </>
  );
};

export default OnlineSchool;
