"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import logo from "../../public/images/logo/logo.png";
import { useAppContext } from "@/context/Context";

const SideNav = () => {
  const { mobile, setMobile } = useAppContext();
  const [currentSection, setCurrentSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "guideline", label: "Course Guideline" },
    { id: "coursecontent", label: "Course Content" },
    { id: "career", label: "Career" },
  ];

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "guideline",
      "coursecontent",
      "career",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <div className={`side-menu ${!mobile ? "side-menu-active" : ""}`}>
        <div className="inner-wrapper side-menu-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={152}
                    height={50}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button
                  className="rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Histudy is a education website template. You can customize all.
            </p>

            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:hello@example.com">
                  <i className="feather-mail"></i>example@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="feather-phone"></i>(302) 555-0107
                </a>
              </li>
            </ul>
          </div>
          <nav className="side-nav w-100 mt--60 mb--80">
            <ul className="navbar-nav">
              {sections.map((sec, i) => (
                <li
                  className={currentSection === sec.id ? "current" : ""}
                  key={i}
                >
                  <ScrollLink
                    to={sec.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ cursor: "pointer" }}
                  >
                    {sec.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Find With Us</span>
            <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="feather-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <i className="feather-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="feather-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkdin.com/">
                  <i className="feather-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="rbt-secondary-menu mt--50">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
