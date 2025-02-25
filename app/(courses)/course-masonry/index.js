"use client";

import { useEffect, useState } from "react";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";
import CourseCardTwo from "@/components/Category/Filter/CourseCard-Two";

const CourseMasonryLayout = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));
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
            <div className="container">
              <div className="row g-5">
                <CourseCardTwo course={courseFilter} />
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

export default CourseMasonryLayout;
