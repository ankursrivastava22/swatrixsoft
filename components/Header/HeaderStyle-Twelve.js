"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";

import logo from "../../public/images/logo/logo.png";
import { useAppContext } from "@/context/Context";
import DarkSwitch from "./dark-switch";

const HeaderStyleTwelve = () => {
  const { mobile, setMobile, isLightTheme, toggleTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
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
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header">
        <HeaderTopBar />

        <div className="rbt-sticky-placeholder"></div>

        <div className={`rbt-header-wrapper ${isSticky ? "rbt-sticky" : ""}`}>
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left">
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
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav onepagenav">
                  <ul className="mainmenu">
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
              </div>

              <div className="header-right">
                <div
                  className="rbt-offcanvas-trigger"
                  id="rbt-offcanvas-activation"
                  onClick={() => setMobile(!mobile)}
                >
                  <span className="offcanvas-trigger">
                    <span className="offcanvas-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStyleTwelve;
