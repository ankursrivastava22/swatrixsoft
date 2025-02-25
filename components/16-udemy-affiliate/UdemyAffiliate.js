"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";

import CourseData from "../../data/course-details/courseData.json";

import UdemyAffiliateBanner from "./UdemyAffiliate-Banner";
import Card from "../Cards/Card";
import AboutEight from "../Abouts/About-Eight";
import CategoryOne from "../Category/CategoryOne";
import Separator from "../Common/Separator";
import BrandOne from "../Brand/Brand-One";
import TestimonialFive from "../Testimonials/Testimonial-Five";

const UdemyAffiliate = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-11 bg-color-darker ptb--100">
        <div className="wrapper">
          <div className="container">
            <UdemyAffiliateBanner CourseData={CourseData} />
          </div>
        </div>
      </div>

      <div className="rbt-course-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <Card
              col="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
              mt=""
              start={0}
              end={12}
              isDesc={false}
              isUser={false}
            />
          </div>

          <div className="row mt--60 text-center">
            <div className="col-lg-12">
              <Link
                className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                href="/course-filter-one-toggle"
              >
                <span data-text="View More Course">View More Course</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-about-area bg-color-darker rbt-section-gap">
        <div className="container"><AboutEight /></div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h4 className="title">Top Categories</h4>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryOne />
          </div>
        </div>
      </div>

      <Separator />

      <div className="rbt-brand-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center mb--40">
                <span className="theme-gradient d-block small-title w-600 mb--10">
                  Trusted by over 13,400 great teams
                </span>
                <p>
                  Leading companies use the same courses to help employees keep
                  their skills fresh.
                </p>
              </div>
              <BrandOne />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30">
            <TestimonialFive isDesc={true} />
          </div>
          <div className="row mt--30">
            <div className="col-lg-12">
              <div className="view-more-btn text-center">
                <a className="rbt-btn-link color-primary" href="#">
                  View More Customer Feedback
                  <i className="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UdemyAffiliate;
