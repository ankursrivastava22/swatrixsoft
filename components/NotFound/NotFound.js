"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import Link from "next/link";
import { Provider } from "react-redux";
import HeaderStyleTen from "../Header/HeaderStyle-Ten";
import Separator from "../Common/Separator";
import FooterOne from "../Footer/Footer-One";

const NotFound = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

          <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
            <div className="error-area">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-10">
                    <h1 className="title">404!</h1>
                    <h3 className="sub-title">Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link className="rbt-btn btn-gradient icon-hover" href="/">
                      <span className="btn-text">Back To Home</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
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

export default NotFound;
