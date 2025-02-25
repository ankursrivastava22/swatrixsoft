"use client";

import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import AcademyGalleryOne from "@/components/Academy-Gallery/AcademyGallery-One";
import AcademyGalleryTwo from "@/components/Academy-Gallery/AcademyGallery-Two";
import AcademyGalleryThree from "@/components/Academy-Gallery/AcademyGallery-Three";

const AcademyGallery = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Academy Gallery" text="Academy Gallery" />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AcademyGalleryOne />
            </div>
          </div>
          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapBottom">
            <div className="container">
              <AcademyGalleryTwo />
            </div>
          </div>
          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapBottom">
            <div className="container">
              <AcademyGalleryThree />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AcademyGallery;
