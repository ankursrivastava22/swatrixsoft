"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import treeSvg from "../../public/images/icons/tree-shape.svg";

const HomeElegantBanner = () => {
  useEffect(() => {
    const typeitInstance = new Typed(".is-visible", {
      strings: ["English.", "Finance.", "Math."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });

    return () => {
      typeitInstance.destroy();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
                <div className="rbt-new-badge rbt-new-badge-one">
                  <span className="rbt-new-badge-icon">🏆</span> The Leader in
                  Online Learning
                </div>
                <h1 className="title">
                  Popular Courses
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient"></b>
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="description has-medium-font-size mt--20">
                  Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                  Redux, React Routing, Animations, Next.js and way more!
                </p>
                <div className="slider-btn rbt-button-group justify-content-center">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Log in to Start</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                  <Link
                    className="rbt-btn hover-icon-reverse btn-white"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Buy The Course</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="row mt--20">
                  <Link href="contact.html">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <Image src={treeSvg} width={912} height={513} alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default HomeElegantBanner;
