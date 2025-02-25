"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Split from "@/components/Split/Split";
import SplitTwo from "@/components/Split/Split-Two";
import Cart from "@/components/Header/Offcanvas/Cart";

const SplitPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Split" text="Split" />

          <div className="rbt-split-area bg-color-white rbt-section-gapTop overflow-hidden">
            <div className="wrapper">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-secondary-opacity">
                  University Status
                </span>
                <h2 className="title">University Overview.</h2>
              </div>

              <div className="rbt-splite-style">
                <div className="split-wrapper">
                  <Split />
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-video-area rbt-section-gap bg-color-white">
            <div className="container">
              <SplitTwo isImg={true} />
            </div>
          </div>

          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SplitPage;
