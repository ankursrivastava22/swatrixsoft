"use client";

import React, { useRef } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

const UniversityBanner = () => {
  const thumbsSwiperRef = useRef(null);

  return (
    <>
      <Swiper
        className="swiper rbt-banner-activation rbt-slider-animation rbt-arrow-between"
        modules={[FreeMode, Navigation]}
        ref={thumbsSwiperRef}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        autoHeight={true}
        navigation={{
          nextEl: ".rbt-arrow-left",
          prevEl: ".rbt-arrow-right",
          clickable: true,
        }}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--17"
              data-gradient-overlay="5"
            >
              <div className="wrapper w-100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="inner text-center">
                        <div className="section-title">
                          <span className="subtitle bg-white-opacity d-inline-block">
                            BASED ON THE BEST HISTUDY
                          </span>
                        </div>
                        <h1 className="title w-700">
                          Hey! Build Your Career <br />
                          <strong className="color-white">
                            With Follow Histudy
                          </strong>
                        </h1>
                        <div className="button-group mt--30">
                          <Link
                            className="rbt-btn btn-gradient rbt-marquee-btn"
                            href="#"
                          >
                            <span data-text="More About University">
                              More About University
                            </span>
                          </Link>
                        </div>
                        <div className="social-share-wrapper mt--40">
                          <ul className="social-icon social-default transparent-with-border">
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
                          <span className="follow-us-text">
                            Follow By Facebook, Twitter, Instagram, and Linkedin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--21"
              data-black-overlay="5"
            >
              <div className="wrapper w-100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="inner text-center">
                        <div className="section-title">
                          <span className="subtitle bg-white-opacity d-inline-block">
                            THE BEST TEMPLATE FOR EDUCATION
                          </span>
                        </div>
                        <h1 className="title w-700">
                          Histudy Starter is a community <br />
                          <strong className="color-white">
                            for creative people.
                          </strong>
                        </h1>
                        <div className="button-group mt--30">
                          <Link
                            className="rbt-btn btn-gradient rbt-marquee-btn radius-round"
                            href="#"
                          >
                            <span data-text="More About University">
                              More About University
                            </span>
                          </Link>
                        </div>
                        <div className="social-share-wrapper mt--40">
                          <ul className="social-icon social-default transparent-with-border">
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
                          <span className="follow-us-text">
                            Follow By Facebook, Twitter, Instagram, and Linkedin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div
              className="rbt-banner-area rbt-banner-6 variation-03 bg_image bg_image--16"
              data-gradient-overlay="5"
            >
              <div className="wrapper w-100">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="inner text-center">
                        <div className="section-title">
                          <span className="subtitle bg-white-opacity d-inline-block">
                            THE BEST TEMPLATE FOR EDUCATION
                          </span>
                        </div>
                        <h1 className="title w-700">
                          Learning keeps you <br />
                          <strong className="color-white">in the lead</strong>
                        </h1>
                        <div className="button-group mt--30">
                          <Link
                            className="rbt-btn btn-gradient rbt-marquee-btn radius-round"
                            href="#"
                          >
                            <span data-text="More About University">
                              More About University
                            </span>
                          </Link>
                        </div>
                        <div className="social-share-wrapper mt--40">
                          <ul className="social-icon social-default transparent-with-border">
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
                          <span className="follow-us-text">
                            Follow By Facebook, Twitter, Instagram, and Linkedin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* <Swiper
        className="swiper rbt-swiper-thumb rbtmySwiperThumb"
        ref={thumbsSwiperRef}
        onSwiper={(swiper) => {
          thumbsSwiperRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <Image
              src={bannerImgOne}
              width={72}
              height={41}
              alt="Banner Images"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={bannerImgTwo}
              width={72}
              height={41}
              alt="Banner Images"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={bannerImgThree}
              width={72}
              height={41}
              alt="Banner Images"
            />
          </SwiperSlide>
        </div>
      </Swiper> */}
    </>
  );
};

export default UniversityBanner;
