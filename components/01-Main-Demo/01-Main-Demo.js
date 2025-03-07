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

const MainDemo = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HomeTechnology />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default MainDemo;
