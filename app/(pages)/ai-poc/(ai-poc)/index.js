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
import AIPOC from "@/components/ai-poc/AIPOC";

const AIPOCPAGE = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb
            title="India's Elite Tech Company Web, Mobile, AI & more."
            text="Hire Expert Developers & Build High-Performance Websites"
          />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <div className="section-title text-center mb--60">
                <h2 className="title">Our Services</h2>
                <p className="description">
                  Delivering Innovative Digital Solutions
                </p>
              </div>
              <AIPOC />
            </div>
          </div>

          <div className="rbt-about-area about-style-2 bg-color-light rbt-section-gap">
            <div className="container">
              <div className="section-title text-center mb--60">
                <h2 className="title">Our Tech Stack</h2>
                <p className="description">
                  Building with Modern Technologies
                </p>
              </div>
              <AIp />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <div className="section-title text-center mb--60">
                <h2 className="title">Featured Projects</h2>
                <p className="description">
                  Success Stories That Define Our Expertise
                </p>
              </div>
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

export default AIPOCPAGE;