"use client";
import Image from "next/image";
import Link from "next/link";

import emoji from "../../../public/images/icons/hand-emojji.svg";
import { useAppContext } from "@/context/Context";

const HeaderTopBar = () => {
  const { toggle, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1 ${
          !toggle ? "deactive" : ""
        }`}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner justify-content-center">
                  <div className="content">
                    <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                      Limited Time Offer
                    </span>
                    <span className="news-text color-white-off">
                      <Image src={emoji} alt="Hand Emojji Images" /> Intro
                      price. Get Histudy for Big Sale -95% off.
                    </span>
                  </div>
                  <div className="right-button">
                    <Link
                      className="rbt-btn-link color-white"
                      href="https://themeforest.net/checkout/from_item/42846507?license=regular"
                    >
                      <span>
                        Purchase Now <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-close position-right">
          <button
            className="rbt-round-btn btn-white-off bgsection-activation"
            onClick={() => setToggle(!toggle)}
          >
            <i className="feather-x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderTopBar;
