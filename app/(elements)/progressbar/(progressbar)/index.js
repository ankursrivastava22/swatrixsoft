"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Progressbar from "@/components/Progressbars/Progressbar";
import ProgressbarFour from "@/components/Progressbars/Progressbar-Four";
import ProgressbarThree from "@/components/Progressbars/Progressbar-Three";
import ProgressbarTwo from "@/components/Progressbars/Progressbar-Two";

const ProgressbarPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <BreadCrumb title="Progressbar" text="Progressbar" />

          <div className="rbt-progressbar-area bg-color-white rbt-section-gap">
            <Progressbar />
          </div>
          <div className="rbt-progressbar-area bg-color-extra2 rbt-section-gap">
            <ProgressbarTwo />
          </div>

          <div className="rbt-progressbar-area bg-color-white rbt-section-gap">
            <ProgressbarThree />
          </div>

          <div className="rbt-progressbar-area bg-color-extra2 rbt-section-gap">
            <ProgressbarFour />
          </div>

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ProgressbarPage;
