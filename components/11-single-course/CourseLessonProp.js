"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

const CourseLessonProp = ({ courseImg, courseContent }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div className="row gy-5 row--30">
        <div className="col-lg-6">
          <div className="feature-course-thumbnail">
            <div className="video-popup-wrapper rbt-shadow-box">
              <Image
                className="w-100 radius-10"
                src={courseImg}
                width={563}
                height={428}
                alt="Card image"
              />
              <Link
                className="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-white-color"
                data-vbtype="video"
                controls
                href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
              >
                <span className="play-icon"></span>
              </Link>
            </div>
            <div className="enroll-btn mt--15">
              <Link
                className="rbt-btn btn-gradient hover-icon-reverse w-100 radius-round"
                href="#"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Continue Course</span>
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
        <div className="col-lg-6 rbt-scroll-max-height rbt-scroll">
          <div className="course-content">
            <div className="rbt-accordion-style rbt-accordion-02 right-no-padding accordion">
              <div className="accordion" id="accordionExampleb2">
                {courseContent.map((data, index) => (
                  <div className="accordion-item card" key={index}>
                    <h2
                      className="accordion-header card-header"
                      id={`headingTwo${index + 1}`}
                    >
                      <button
                        className={`accordion-button ${
                          data.isShow ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseTwo${index + 1}`}
                        aria-expanded={data.isShow}
                        aria-controls={`collapseTwo${index + 1}`}
                      >
                        {data.title}
                      </button>
                    </h2>
                    <div
                      id={`collapseTwo${index + 1}`}
                      className={`accordion-collapse collapse ${
                        data.isShow ? "show" : ""
                      }`}
                      aria-labelledby={`headingTwo${index + 1}`}
                      data-bs-parent="#accordionExampleb2"
                    >
                      <div className="accordion-body card-body">
                        <ul className="rbt-course-main-content liststyle">
                          {data.list.map((list, i) => (
                            <li key={i}>
                              <a href="#">
                                <div className="course-content-left">
                                  <i
                                    className={`feather-${
                                      list.isPlay ? "play-circle" : "file-text"
                                    }`}
                                  ></i>
                                  <span className="text">{list.text}</span>
                                </div>
                                <div
                                  className={`course-content-right ${
                                    list.isLoc ? "only-lock" : ""
                                  }`}
                                >
                                  {list.isLoc ? (
                                    <i className="feather-lock"></i>
                                  ) : (
                                    <>
                                      <span className="rbt-badge bg-pink-opacity">
                                        {list.min} min
                                      </span>
                                      <span className="rbt-badge bg-primary-opacity">
                                        Preview
                                      </span>
                                    </>
                                  )}
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLessonProp;
