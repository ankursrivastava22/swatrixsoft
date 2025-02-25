"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseDetailsTwo from "@/components/Course-Details/CourseDetails-Two";

const SingleCourseTwo = ({ getParams }) => {
  const router = useRouter();
  const postId = parseInt(getParams.courseId);
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseTab));

  const checkMatch = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    if (postId && checkMatch === undefined) {
      router.push("/course-card-2");
    }

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [checkMatch, router]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image"></div>
            <div className="rbt-banner-content">
              <div className="rbt-banner-content-top rbt-breadcrumb-style-3">
                <CourseHead
                  checkMatch={checkMatch !== undefined ? checkMatch : ""}
                />
              </div>
            </div>
          </div>

          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseDetailsTwo
                  checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
                />
              </div>
            </div>
          </div>

          <CourseActionBottom
            checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
          />

          <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            <SimilarCourses
              checkMatchCourses={
                checkMatch !== undefined ? checkMatch.similarCourse : ""
              }
            />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourseTwo;
