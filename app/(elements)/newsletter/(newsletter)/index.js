"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Newsletter from "@/components/Newsletters/Newsletter";
import NewsletterFour from "@/components/Newsletters/Newsletter-Four";
import NewsletterThree from "@/components/Newsletters/Newsletter-Three";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const NewsletterPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Newsletter" text="Newsletter" />

          <div className="rbt-newsletter-area bg-color-white rbt-section-gap">
            <Newsletter />
          </div>

          <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
            <NewsletterTwo />
          </div>

          <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
            <NewsletterThree />
          </div>

          <div className="rbt-newsletter-area bg-color-white rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <NewsletterFour />
                </div>
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default NewsletterPage;
