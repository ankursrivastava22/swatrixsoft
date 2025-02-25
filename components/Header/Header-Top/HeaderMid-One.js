import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";

import logo from "../../../public/images/logo/logo.png";
import User from "../Offcanvas/User";

const HeaderMidOne = ({
  gapSpaceBetween,
  bgColor,
  flexDirection,
  container,
}) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();
  const { total_items } = useSelector((state) => state.CartReducer);

  return (
    <>
      <div
        className={`rbt-header-middle position-relative rbt-header-mid-1 ${gapSpaceBetween} ${bgColor} d-none d-xl-block`}
      >
        <div className={`${container}`}>
          <div className={`rbt-header-sec align-items-center ${flexDirection}`}>
            <div className="rbt-header-sec-col rbt-header-left">
              <div className="rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rbt-header-sec-col rbt-header-center">
              <div className="rbt-header-content">
                <div className="header-info">
                  <div className="rbt-search-with-category">
                    <div className="filter-select rbt-modern-select search-by-category">
                      <select>
                        <option>All Categories</option>
                        <option>Education</option>
                        <option>Course</option>
                        <option>Art</option>
                        <option>Web Design</option>
                      </select>
                    </div>
                    <div className="search-field">
                      <input type="text" placeholder="Search Course" />
                      <button
                        className="rbt-round-btn serach-btn"
                        type="submit"
                      >
                        <i className="feather-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rbt-header-sec-col rbt-header-right">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="quick-access">
                    <li className="access-icon rbt-mini-cart">
                      <Link
                        className="rbt-cart-sidenav-activation rbt-round-btn"
                        href="#"
                        onClick={() => setCart(!cartToggle)}
                      >
                        <i className="feather-shopping-cart"></i>
                        <span className="rbt-cart-count">{total_items}</span>
                      </Link>
                    </li>

                    <li className="access-icon rbt-user-wrapper">
                      <Link className="rbt-round-btn" href="#">
                        <i className="feather-user"></i>
                      </Link>
                      <User />
                    </li>
                  </ul>
                </div>

                <div className="header-info">
                  <Link
                    className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none"
                    href="#"
                  >
                    <span data-text="Get Free Course">Get Free Course</span>
                  </Link>
                </div>

                <div className="header-info d-xl-none">
                  <ul className="quick-access">
                    <li className="access-icon">
                      <Link
                        className="search-trigger-active rbt-round-btn"
                        href="#"
                      >
                        <i className="feather-search"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="header-info d-block d-xl-none">
                  <div className="mobile-menu-bar">
                    <div className="hamberger">
                      <button className="hamberger-button rbt-round-btn">
                        <i className="feather-menu"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMidOne;
