"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import sal from "sal.js";

import About from "@/components/Abouts/About";
import AboutEight from "@/components/Abouts/About-Eight";
import AboutFive from "@/components/Abouts/About-Five";
import AboutFour from "@/components/Abouts/About-Four";
import AboutSaven from "@/components/Abouts/About-Saven";
import AboutSix from "@/components/Abouts/About-Six";
import AboutThree from "@/components/Abouts/About-Three";
import AboutTwo from "@/components/Abouts/About-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const AboutPage = () => {
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
          <MobileMenu />
          <Cart />
          <BreadCrumb title="About" text="About" />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <ParallaxProvider>
                <AboutTwo />
              </ParallaxProvider>
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutThree />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFour />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFive />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutSix
                btnClass="radius rbt-marquee-btn marquee-text-y"
                btnText="Learn More"
              />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutSaven />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutEight />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AboutPage;
