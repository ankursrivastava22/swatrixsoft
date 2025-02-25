"use client";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Cart from "@/components/Header/Offcanvas/Cart";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Pricing from "@/components/Pricing/Pricing";
import PricingTwo from "@/components/Pricing/Pricing-Two";
import PricingThree from "@/components/Pricing/Pricing-Three";
import PricingFour from "@/components/Pricing/Pricing-Four";
import PricingFive from "@/components/Pricing/Pricing-Five";

const PricingPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Pricing" text="Pricing" />

          <div className="rbt-pricing-area bg-color-white rbt-section-gap">
            <Pricing title="Style One" tag="COURSE PRICING" />
          </div>
          <div className="rbt-pricing-area bg-color-extra2 rbt-section-gap">
            <PricingTwo title="Style Two" tag="COURSE PRICING" />
          </div>
          <div className="rbt-pricing-area bg-color-white rbt-section-gap">
            <PricingThree
              title="Style Three"
              tag="COURSE PRICING"
              col="col-lg-6 col-md-6 col-12"
              position="text-start text-md-end"
            />
          </div>
          <div className="rbt-pricing-area bg-color-extra2 rbt-section-gap">
            <PricingFour title="Style Four" tag="COURSE PRICING" />
          </div>
          <div className="rbt-pricing-area bg-color-white rbt-section-gap">
            <PricingFive title="Style Four" tag="COURSE PRICING" />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default PricingPage;
