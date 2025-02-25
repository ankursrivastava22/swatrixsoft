"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleFour from "@/components/Header/HeaderStyle-Four";
import UniversityStatus from "@/components/06-university-status/UniversityStatus";
import FooterThree from "@/components/Footer/Footer-Three";

const UniversityStatusPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleFour />
          <Cart />

          <UniversityStatus />

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default UniversityStatusPage;
