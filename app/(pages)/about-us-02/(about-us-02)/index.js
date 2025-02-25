"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterThree from "@/components/Footer/Footer-Three";
import BrandThree from "@/components/Brand/Brand-Three";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import AboutSix from "@/components/Abouts/About-Six";
import ServiceTwelve from "@/components/Services/Service-Twelve";
import TeamTen from "@/components/Team/TeamTen";
import Separator from "@/components/Common/Separator";
import Banner from "@/components/About-Us-02/Banner";
import Video from "@/components/About-Us-02/Video";

const AboutUsPageTwo = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-banner-area rbt-banner-8 variation-02">
            <div className="container">
              <Banner />
            </div>
          </div>

          <Video />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutSix
                btnClass="radius rbt-marquee-btn marquee-text-y"
                btnText="Learn More"
              />
            </div>
          </div>
          <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
            <div className="rbt-callto-action rbt-cta-default style-6">
              <CallToActionSix />
            </div>
          </div>
          <div className="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
            <ServiceTwelve />
          </div>
          <div className="rbt-team-area bg-gradient-8 rbt-section-gap">
            <TeamTen />
          </div>
          <div className="rbt-brand-area bg-color-white rbt-section-gap">
            <BrandThree />
          </div>
          <Separator />

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPageTwo;
