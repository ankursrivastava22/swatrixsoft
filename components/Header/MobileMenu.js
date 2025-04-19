"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/logo.png";
import Nav from "./Nav";
import { useAppContext } from "@/context/Context";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Swatrixsoft Logo"
                    priority
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                  aria-label="Close Menu"
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Leading Web Development Company Delivering Innovative Digital Solutions
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:info@swatrixsoft.com">
                  <i className="feather-mail"></i>ankurdevops22@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+919898989898">
                  <i className="feather-phone"></i>+917976930931
                </Link>
              </li>
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="/contact"
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Connect With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.linkedin.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                    <i className="feather-github"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;