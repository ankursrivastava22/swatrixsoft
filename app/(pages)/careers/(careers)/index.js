"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import CareerForm from "@/components/Careers/Career-Form";

const CareerPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        {/* Header */}
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        {/* Contact Section */}
        <div className="rbt-contact-area bg-gradient-11 rbt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--60">
                  <span className="subtitle bg-secondary-opacity">
                    Get in Touch
                  </span>
                  <h2 className="title">
                    Let's Start Your Digital Journey <br /> with Swatrixsoft
                  </h2>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>

        <CareerForm />

        {/* Footer */}
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default CareerPage;