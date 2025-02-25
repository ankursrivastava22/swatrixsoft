"use client";

import { useEffect } from "react";
import sal from "sal.js";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import CallToAction from "@/components/Call-To-Action/CallToAction";
import CallToActionFive from "@/components/Call-To-Action/CallToAction-Five";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import CallToActionThree from "@/components/Call-To-Action/CallToAction-Three";
import CallToActionTwo from "@/components/Call-To-Action/CallToAction-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const CallToActionPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Call To Action" text="Call To Action" />

          <div className="rbt-callto-action-area bg-color-white rbt-section-gap">
            <CallToAction />
          </div>

          <CallToActionTwo />
          <CallToActionThree />

          <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
            <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
          </div>

          <div className="rbt-call-to-action-area rbt-section-gap bg-color-extra2">
            <CallToActionFive />
          </div>

          <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
            <div className="rbt-callto-action rbt-cta-default style-6">
              <CallToActionSix />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CallToActionPage;
