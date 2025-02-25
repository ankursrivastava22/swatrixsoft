"use client";

import React, { useEffect, useState } from "react";

import CourseDetails from "../../../data/course-details/courseData.json";

import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CategoryHead from "@/components/Category/CategoryHead";
import CourseTab from "@/components/Category/Filter/CourseTab";

const CourseTabPage = () => {
  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );
  const [courseFilter, setCourseFilter] = useState(getAllCourse);

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHead
            courseFilter={courseFilter}
            setCourseFilter={setCourseFilter}
            filterItem={filterItem}
            category={getAllCourse}
          />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseTab course={courseFilter} />
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

export default CourseTabPage;
