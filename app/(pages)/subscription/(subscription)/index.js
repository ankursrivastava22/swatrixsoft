"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterThree from "@/components/Footer/Footer-Three";
import BreadCrumb from "@/components/Common/BreadCrumb";
import PricingThree from "@/components/Pricing/Pricing-Three";
import AccordionThree from "@/components/Accordions/Accordion-Three";

const SubscriptionPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Subscription" text="Subscription" />

          <div className="rbt-pricing-area bg-color-white rbt-section-gap">
            <PricingThree title="" tag="" col="col-12" position="text-center" />
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
            <AccordionThree />
          </div>

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default SubscriptionPage;
