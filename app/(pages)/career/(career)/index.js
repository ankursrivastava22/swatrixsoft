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

        {/* Contact Form */}
        <CareerForm />

        {/* Google Map Section */}
        <div className="rbt-google-map bg-color-white rbt-section-gapTop">
          <div className="container-fluid p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.988186948552!2d72.9273958!3d26.262046799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418fcbe7a1139d%3A0xcd1ee3709d5baa72!2sSwatrixsoft!5e0!3m2!1sen!2sin!4v1742318300744!5m2!1sen!2sin"
              className="w-100"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default CareerPage;