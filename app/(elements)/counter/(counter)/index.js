"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Counter from "@/components/Counters/Counter";
import CounterTwo from "@/components/Counters/Counter-Two";
import CounterThree from "@/components/Counters/Counter-Three";
import CounterFour from "@/components/Counters/Counter-Four";
import CounterFive from "@/components/Counters/Counter-Five";
import CounterSix from "@/components/Counters/Counter-Six";

const CounterPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Counter" text="Counter" />

          <div className="rbt-counterup-area bg-color-white rbt-section-gap">
            <Counter isDesc={true} />
          </div>

          <div className="rbt-counterup-area bg-color-extra2 rbt-section-gap">
            <CounterTwo />
          </div>

          <div className="rbt-counterup-area bg-color-white rbt-section-gap">
            <CounterThree />
          </div>

          <div className="rbt-counterup-area bg-color-extra2 rbt-section-gap">
            <div className="conter-style-2">
              <CounterFour />
            </div>
          </div>

          <div
            className="rbt-counterup-area bg_image bg_image_fixed bg_image--3 ptb--170 bg-black-overlay"
            data-black-overlay="4"
          >
            <div className="conter-style-2">
              <CounterFive />
            </div>
          </div>

          <div className="rbt-counterup-area bg-color-white rbt-section-gap">
            <CounterSix />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CounterPage;
