"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import "venobox/dist/venobox.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import EventData from "../../data/events.json";
import UniversityBanner from "./UniversityBanner";
import ServiceEight from "../Services/Service-Eight";
import AdvanceTab from "../AdvanceTab/AdvanceTab";
import CardThree from "../Cards/Card-Three";
import BlogGrid from "../Blogs/BlogGrid";
import Events from "../Events/Events";
import Course from "../Accordions/Course";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
import BrandOne from "../Brand/Brand-One";

import imgOne from "../../public/images/gallery/gallery-03.jpg";
import imgTwo from "../../public/images/gallery/gallery-01.jpg";
import imgThree from "../../public/images/gallery/gallery-05.jpg";
import hiImgOne from "../../public/images/banner/hi_1.png";
import hiImgTwo from "../../public/images/banner/hi_2.png";
import hiImgThree from "../../public/images/banner/hi_3.png";
import videoImg from "../../public/images/others/video-06.jpg";

const UniversityClassic = ({ blogdata }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="rbt-slider-main-wrapper position-relative">
        <UniversityBanner />
      </div>

      <div
        className="rbt-video-area bg-color-white rbt-section-gapTop"
        id="about"
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg}
                  width={638}
                  height={407}
                  property="true"
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
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
                  <p className="description mt--30">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="rbt-feature-wrapper mt--40">
                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-pink-opacity">
                        <i className="feather-heart"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Flexible Classes</h6>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-primary-opacity">
                        <i className="feather-book"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Learn From Anywhere</h6>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-coral-opacity">
                        <i className="feather-monitor"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">
                          Experienced Teacher&apos;s service.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-category-area bg-color-white rbt-section-gapTop">
        <ServiceEight isHead={false} />
      </div>

      <div className="rbt-banner-area rbt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper viral-banner-activation rbt-arrow-between"
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".rbt-arrow-left",
                  prevEl: ".rbt-arrow-right",
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgOne}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgTwo}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgThree}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-left">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-left"></i>
                    <i className="rbt-icon-top feather-arrow-left"></i>
                  </div>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-right">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-right"></i>
                    <i className="rbt-icon-top feather-arrow-right"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-advance-tab-area rbt-section-gapTop bg-color-white">
        <AdvanceTab
          tag=""
          title="About Us."
          desc=" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
      </div>

      <div
        className="rbt-program-area rbt-section-gapTop bg-color-white"
        id="program"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Program</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="#">
                  Browse Histudy Program<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rbt-category-gallery">
                <div className="thumbnail">
                  <Link href="#">
                    <Image src={imgOne} property="true" alt="Gallery Images" />
                    <div className="rbt-bg-overlay"></div>
                  </Link>
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="#">Vue-Js</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rbt-category-gallery">
                <div className="thumbnail">
                  <Link href="#">
                    <Image src={imgTwo} property="true" alt="Gallery Images" />
                    <div className="rbt-bg-overlay"></div>
                  </Link>
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="#">React Js</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rbt-category-gallery">
                <div className="thumbnail">
                  <Link href="#">
                    <Image
                      src={imgThree}
                      property="true"
                      alt="Gallery Images"
                    />
                    <div className="rbt-bg-overlay"></div>
                  </Link>
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="#">Javascript</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rbt-course-area rbt-section-gapTop bg-color-white"
        id="course"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Online Courses</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="#">
                  Browse Histudy Courses<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <CardThree />
          </div>
        </div>
      </div>

      <div
        className="rbt-rbt-blog-area rbt-section-gapTop bg-color-white"
        id="blog"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--30">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Research</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="/blog-list">
                  Browse Histudy Post<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <BlogGrid
            isPagination={false}
            top={false}
            start={0}
            end={3}
            blogdata={blogdata}
          />
        </div>
      </div>

      <div className="rbt-event-area bg-color-white rbt-section-gapTop">
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Events</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="#">
                  University Upcoming Events
                  <i className="feather-arrow-right"></i>
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
      <div
        className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
        id="testimonial"
      >
        <div className="container">
          <Course title="University Tuition & Fees" />
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
        <div className="wrapper mb--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                    People like histudy education. <br /> No joking - Parents
                    Review Here!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>
      <div className="rbt-gallery-area">
        <Gallery />
      </div>
      <div className="rbt-brand-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row align-items-center g-5">
            <BrandOne />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityClassic;
