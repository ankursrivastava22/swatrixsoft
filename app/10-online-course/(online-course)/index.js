"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import OnlineCourse from "@/components/10-online-course/OnlineCourse";
import FooterThree from "@/components/Footer/Footer-Three";

const OnlineCoursePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            headerSticky="rbt-sticky"
          />
          <Cart />

          <OnlineCourse />

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default OnlineCoursePage;
