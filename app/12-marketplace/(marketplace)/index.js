"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Marketplace from "@/components/12-Marketplace/12-Marketplace";
import HeaderTopBar from "@/components/Header/HeaderTopBar/HeaderTopBar";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";

const MarketplacePage = ({ getAllBlogs }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderTopBar />
          <HeaderStyleNine headerType="" />
          <Marketplace blogdata={getAllBlogs} />
          <Cart />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default MarketplacePage;
