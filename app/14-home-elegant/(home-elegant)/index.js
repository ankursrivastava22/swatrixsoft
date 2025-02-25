"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import Separator from "@/components/Common/Separator";
import HomeElegant from "@/components/14-home-elegant/14-Home-Elegant";
import FooterThree from "@/components/Footer/Footer-Three";

const HomeElegantPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleSix headerType="" />
          <Cart />

          <HomeElegant />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default HomeElegantPage;
