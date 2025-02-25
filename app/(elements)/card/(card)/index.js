"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import sal from "sal.js";
import "../../../../node_modules/sal.js/dist/sal.css";

import Card from "@/components/Cards/Card";
import CardFive from "@/components/Cards/Card-Five";
import CardFour from "@/components/Cards/Card-Four";
import CardThree from "@/components/Cards/Card-Three";
import CardTwo from "@/components/Cards/Card-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const CardPage = () => {
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
          <BreadCrumb title="Card" text="Card" />

          <div className="rbt-rbt-card-area rbt-section-gap bg-color-white">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style One</h2>
                  </div>
                </div>
              </div>
              <div className="row row--15">
                <Card
                  col="col-lg-4 col-md-6 col-sm-6 col-12"
                  mt="mt--30"
                  start={0}
                  end={3}
                  isDesc={true}
                  isUser={true}
                />
              </div>
            </div>
          </div>

          <div className="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style Two</h2>
                  </div>
                </div>
              </div>
              <CardTwo />
            </div>
          </div>

          <div className="rbt-rbt-card-area rbt-section-gap bg-color-white">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style Three</h2>
                  </div>
                </div>
              </div>
              <div className="row row--15">
                <CardThree />
              </div>
            </div>
          </div>

          <div className="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style Four</h2>
                  </div>
                </div>
              </div>
              <CardFour />
            </div>
          </div>

          <div className="rbt-rbt-card-area rbt-section-gap bg-color-white">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style Five</h2>
                  </div>
                </div>
              </div>
              <div className="row row--15">
                <CardFive />
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

export default CardPage;
