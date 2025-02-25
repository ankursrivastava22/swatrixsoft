"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import React, { useState, useEffect } from "react";

const CourseActionBottom = ({ checkMatchCourses }) => {
  const path = usePathname();
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ScrollPosition = window.pageYOffset;
      let isHide;
      if (path === "/course-detail-2/[courseId]") {
        isHide = ScrollPosition > 4365 && ScrollPosition < 5609;
      } else {
        isHide = ScrollPosition > 4365;
      }

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);
  return (
    <>
      <div
        className={`rbt-course-action-bottom ${
          hideOnScroll ? "rbt-course-action-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="section-title text-center text-md-start">
                <h5 className="title mb--0">{checkMatchCourses.courseTitle}</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt_sm--15">
              <div className="course-action-bottom-right rbt-single-group">
                <div className="rbt-single-list rbt-price large-size justify-content-center">
                  <span className="current-price color-primary">
                    ${checkMatchCourses.price}
                  </span>
                  <span className="off-price">
                    ${checkMatchCourses.offPrice}
                  </span>
                </div>
                <div className="rbt-single-list action-btn">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse btn-md"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Purchase Now</span>
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
        </div>
      </div>
    </>
  );
};

export default CourseActionBottom;
