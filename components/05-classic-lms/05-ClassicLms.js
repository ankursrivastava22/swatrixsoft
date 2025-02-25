"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import HomeCourse from "../01-Main-Demo/Home-Sections/HomeCourse";
import NewsletterThree from "../Newsletters/Newsletter-Three";
import Card from "../Cards/Card";
import BlogGrid from "../Blogs/BlogGrid";
import Instagram from "../Instagram/Instagram";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import CategorySix from "../Category/CategorySix";

const ClassicLms = ({ blogdata }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-1 variation-2 height-750">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8">
              <div className="content">
                <div className="inner">
                  <div className="rbt-new-badge rbt-new-badge-one">
                    <span className="rbt-new-badge-icon">🏆</span> The Leader in
                    Online Learning
                  </div>
                  <h1 className="title">
                    The Largest
                    <span className="color-primary">Online Learning</span>
                    Platform for Drive Your Career.
                  </h1>
                  <p className="description">
                    This template includes all the necessary pages of the
                    onlineLorem. And you can be build Link
                    <strong>education template easily</strong>.
                  </p>
                  <div className="slider-btn">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View Course</span>
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
            <div className="col-lg-4">
              <div className="content">
                <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
                  <HomeCourse start={3} end={6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-start mb--30">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title">
                <h4 className="title">Popular Categories.</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn rbt-switch-btn bg-primary-opacity btn-sm"
                  href="#"
                >
                  <span data-text="View All">View All</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <CategorySix />
          </div>
        </div>
      </div>
      <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
        <NewsletterThree />
      </div>
      <div className="rbt-course-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--55 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">
                  Top Popular Course
                </span>
                <h2 className="title">
                  Most Popular <span className="color-primary">Courses</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="load-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn rbt-switch-btn bg-primary-opacity"
                  href="/course-filter-one-toggle"
                >
                  <span data-text="View All Course">View All Course</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <Card
              col="col-lg-4 col-md-6 col-sm-12 col-12"
              mt=""
              start={0}
              end={6}
              isDesc={true}
              isUser={true}
            />
          </div>
        </div>
      </div>
      <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
        <TestimonialFour />
      </div>
      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-color-white">
        <div className="container">
          <div className="row mb--55 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">Top News</span>
                <h2 className="title">
                  Have a look on <span className="color-primary">our News</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="load-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn rbt-switch-btn bg-primary-opacity"
                  href="/blog-list"
                >
                  <span data-text="View All News">View All News</span>
                </Link>
              </div>
            </div>
          </div>

          <BlogGrid
            isPagination={false}
            top={false}
            start={4}
            end={7}
            blogdata={blogdata}
          />
        </div>
      </div>
      <div className="rbt-instagram-area bg-color-white rbt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--60">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">Instagram</span>
                <h2 className="title">
                  Follow Histudy On
                  <span className="color-primary">Instagram</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Instagram />
      </div>
    </>
  );
};

export default ClassicLms;
