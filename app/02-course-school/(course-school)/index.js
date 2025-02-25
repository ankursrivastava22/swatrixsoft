"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import CourseSchool from "@/components/02-course-school/CourseSchool";
import FooterFour from "@/components/Footer/FooterFour";

const CourseSchoolPage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleSix headerType="rbt-transparent-header" />
          <Cart />

          <CourseSchool blogs={getBlog} />

          <FooterFour />
        </Context>
      </Provider>
    </>
  );
};

export default CourseSchoolPage;
