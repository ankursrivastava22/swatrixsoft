"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import Cart from "@/components/Header/Offcanvas/Cart";

import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTwelve from "@/components/Header/HeaderStyle-Twelve";
import SideNav from "@/components/Header/SideNav";
import HomeTechnology from "@/components/15-home-technology/HomeTechnology";

const HomeTechnologyPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <SideNav />
          <HeaderStyleTwelve />
          <Cart />

          <HomeTechnology />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default HomeTechnologyPage;
