"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import logo from "../../../public/images/logo/logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";

import Nav from "../Nav";
import Category from "../Category/Category";
import { useAppContext } from "@/context/Context";

const HeaderSeven = ({
  gapSpaceBetween,
  transparent,
  navigationEnd,
  btnClass,
  btnText,
  headerType,
}) => {
  const { mobile, setMobile, isLightTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${transparent} ${
          !headerType && isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className="container">
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="header-info d-none d-lg-block">
                <Category />
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            <div className="header-right">
              <div className="rbt-btn-wrapper d-none d-xl-block">
                <Link className={`rbt-btn ${btnClass}`} href="#">
                  <span data-text={`${btnText}`}>{btnText}</span>
                </Link>
              </div>

              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button rbt-round-btn"
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSeven;
