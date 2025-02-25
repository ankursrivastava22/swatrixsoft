"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Accordion from "@/components/Accordions/Accordion";
import AccordionFour from "@/components/Accordions/Accordion-Four";
import AccordionThree from "@/components/Accordions/Accordion-Three";
import AccordionTwo from "@/components/Accordions/Accordion-Two";
import Course from "@/components/Accordions/Course";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const AccordionPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Accordion" text="Accordion" />

          <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
            <Accordion />
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
            <AccordionTwo />
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
            <AccordionThree />
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AccordionFour />
            </div>
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
            <Course title="Tuition & Fees" tag="COURSE PRICING" />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AccordionPage;
