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
    { id: "home", label: "Home", icon: "feather-home" },
    { id: "services", label: "Our Services", icon: "feather-layers" },
    { id: "portfolio", label: "Portfolio", icon: "feather-grid" },
    { id: "technologies", label: "Technologies", icon: "feather-code" },
    { id: "contact", label: "Contact Us", icon: "feather-mail" },
  ];

  useEffect(() => {
    const sectionIds = sections.map(section => section.id);

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
    return () => window.removeEventListener("scroll", handleScroll);
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
                    width={65}
                    height={50}
                    alt="Swatrixsoft Logo"
                    priority
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="rbt-round-btn"
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
                <a href="mailto:info@swatrixsoft.com">
                  <i className="feather-mail"></i>swatrixsoft@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919898989898">
                  <i className="feather-phone"></i>+91 7976930931
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
                    className="nav-link"
                  >
                    <i className={sec.icon}></i>
                    <span>{sec.label}</span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Connect With Us</span>
            <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
              <li>
                <a href="https://www.linkedin.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                  <i className="feather-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                  <i className="feather-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                  <i className="feather-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/swatrixsoft" target="_blank" rel="noopener noreferrer">
                  <i className="feather-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <ul className="rbt-secondary-menu mt--50">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/contact">Support</Link>
            </li>
            <li>
              <Link href="/hireteam">Hire Team</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;