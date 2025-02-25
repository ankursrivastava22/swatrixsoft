"use client";

import Store from "@/redux/store";
import { Provider } from "react-redux";
import Context from "@/context/Context";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Instagram from "@/components/Instagram/Instagram";
import Cart from "@/components/Header/Offcanvas/Cart";

const InstagramPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Instagram" text="Instagram" />
          <div className="rbt-instagram-area bg-color-white rbt-section-gap">
            <Instagram />
          </div>
          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default InstagramPage;
