"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSeven from "@/components/Header/HeaderStyle-Seven";
import InstructorPortfolio from "@/components/07-instructor-portfolio/InstructorPortfolio";
import FooterTwo from "@/components/Footer/Footer-Two";

const InstructorPortfolioPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleSeven headerSticky="rbt-sticky" />
          <Cart />

          <InstructorPortfolio />

          <FooterTwo />
        </Context>
      </Provider>
    </>
  );
};

export default InstructorPortfolioPage;
