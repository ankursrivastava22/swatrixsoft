"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import videoImg from "../../public/images/others/video-02.jpg";
import clientImg from "../../public/images/testimonial/client-02.png";

const OnlineCourseBanner = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="content">
            <div className="inner">
              <div className="rbt-badge-group justify-content-start">
                <span className="meta-text d-flex align-items-center">
                  <span className="icon">🎬</span> Video Online Course
                </span>
                <Link href="#" className="rbt-badge-2">
                  <div className="image">
                    <Image
                      src={clientImg}
                      width={30}
                      height={30}
                      alt="Education Images"
                    />
                  </div>
                  Learn with <strong>Fatima Asrafy</strong>
                </Link>
              </div>
              <h1 className="title">Online Courses</h1>
              <p className="description has-medium-font-size mt--20">
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js and way more!
              </p>
              <div className="slider-btn rbt-button-group justify-content-start">
                <Link
                  className="rbt-btn btn-gradient radius-round hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Log in to Start</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rbt-btn radius-round hover-icon-reverse btn-white"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Buy The Course</span>
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
        <div className="col-lg-5 offset-xl-1 order-1 order-lg-2">
          <div className="video-popup-wrapper">
            <Image
              className="w-100 rbt-radius"
              src={videoImg}
              width={526}
              height={341}
              alt="Video Images"
            />
            <Link
              className="rbt-btn rounded-player-2 popup-video position-to-top with-animation"
              data-vbtype="video"
              controls
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span className="play-icon"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCourseBanner;
