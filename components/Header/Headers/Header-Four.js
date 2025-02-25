"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";

import logo from "../../../public/images/logo/logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";

import Nav from "../Nav";
import User from "../Offcanvas/User";
import Search from "../Offcanvas/Search";

const HeaderFour = ({ gapSpaceBetween, sticky, navigationEnd, container }) => {
  const {
    mobile,
    setMobile,
    search,
    setSearch,
    cartToggle,
    setCart,
    isLightTheme,
  } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const { total_items } = useSelector((state) => state.CartReducer);

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
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
          isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left">
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
            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            <div className="header-right">
              <ul className="quick-access">
                <li className="access-icon rbt-user-wrapper right-align-dropdown">
                  <Link className="rbt-round-btn" href="#">
                    <i className="feather-user"></i>
                  </Link>
                  <User />
                </li>
                <li
                  className="access-icon rbt-mini-cart"
                  onClick={() => setCart(!cartToggle)}
                >
                  <Link
                    className="rbt-cart-sidenav-activation rbt-round-btn"
                    href="#"
                  >
                    <i className="feather-shopping-cart"></i>
                    <span className="rbt-cart-count">{total_items}</span>
                  </Link>
                </li>
                <li className="access-icon">
                  <Link
                    className={`search-trigger-active rbt-round-btn ${
                      search ? "" : "open"
                    }`}
                    href="#"
                    onClick={() => setSearch(!search)}
                  >
                    <i className="feather-search"></i>
                  </Link>
                </li>
              </ul>

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
        <Search />
      </div>
    </>
  );
};

export default HeaderFour;
