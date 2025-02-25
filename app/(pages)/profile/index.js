"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import CourseData from "../../../data/course-details/courseData.json";
import UserProfile from "@/components/User-Profile/User-Profile";
import Biography from "@/components/User-Profile/User-Biography";
import UserCourses from "@/components/User-Profile/User-Courses";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const SingleProfile = ({ getParams }) => {
  const router = useRouter();
  const postId = parseInt(getParams.profileId);
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

  const checkMatchProfile = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    if (postId && checkMatchProfile === undefined) {
      router.push("/profile/1");
    }
  }, [checkMatchProfile, router]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="" headerType={true} />
          <MobileMenu />
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image"></div>
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <UserProfile checkMatchProfile={checkMatchProfile} />
                <Biography checkMatchProfile={checkMatchProfile} />
              </div>
              <div className="rbt-profile-course-area mt--60">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sction-title">
                      <h2 className="rbt-title-style-3">Courses</h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5 mt--5">
                  {checkMatchProfile &&
                    checkMatchProfile.relatedCourse.map((data, index) => (
                      <UserCourses {...data} key={index} relatedCourse={data} />
                    ))}
                </div>
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleProfile;
