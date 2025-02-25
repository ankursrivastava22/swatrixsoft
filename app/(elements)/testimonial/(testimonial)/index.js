"use client";

import Link from "next/link";
import { useEffect } from "react";
import sal from "sal.js";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterOne from "@/components/Footer/Footer-One";
import Testimonial from "@/components/Testimonials/Testimonial";
import TestimonialTwo from "@/components/Testimonials/Testimonial-Two";
import TestimonialThree from "@/components/Testimonials/Testimonial-Three";
import TestimonialFour from "@/components/Testimonials/Testimonial-Four";
import TestimonialFive from "@/components/Testimonials/Testimonial-Five";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import TestimonialSeven from "@/components/Testimonials/Testimonial-Seven";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import BreadCrumb from "@/components/Common/BreadCrumb";

const TestimonialPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Testimonial" text="Testimonial" />

          <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
            <Testimonial />
          </div>
          <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        EDUCATION FOR EVERYONE
                      </span>
                      <h2 className="title">
                        People like histudy education. <br /> No joking - here’s
                        the proof!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TestimonialTwo />
          </div>
          <div className="rbt-testimonial-area bg-color-white rbt-section-gap">
            <TestimonialThree
              isStar={false}
              bgClass="bg-gray-light"
              subTitleBg="bg-primary-opacity"
              designation=""
            />
          </div>
          <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
            <TestimonialFour />
          </div>
          <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gapBottom">
            <TestimonialFive isDesc={true} />
          </div>
          <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <h2 className="title">What Our Learners Say</h2>
                    <p className="description mt--20">
                      Learning communicate to global world and build a bright
                      future with our histudy.
                    </p>
                    <div className="veiw-more-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Marquee Y">Marquee Y</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <TestimonialSix />
              </div>
            </div>
          </div>
          <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        EDUCATION FOR EVERYONE
                      </span>
                      <h2 className="title">
                        People like histudy education. <br /> No joking - here’s
                        the proof!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <TestimonialSeven />
            </div>
          </div>

          <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
            <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
          </div>

          <MobileMenu />

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default TestimonialPage;
