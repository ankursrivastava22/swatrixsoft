// pages/DevelopmentandDesign.js
"use client";

import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";

import AcademyGalleryOne from "@/components/Academy-Gallery/AcademyGallery-One";
import AcademyGalleryTwo from "@/components/Academy-Gallery/AcademyGallery-Two";
import AcademyGalleryThree from "@/components/Academy-Gallery/AcademyGallery-Three";
import DevelopmentDesign from "@/components/development-and-design/DevelopmentDesign";

const DevelopmentandDesign = () => {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        <BreadCrumb
          title="Swatrixsoft – Jodhpur’s Elite IT Partner: Web, Mobile & AI"
          text="Hire Expert Developers & Build High-Performance Digital Products"
        />

        {/* Our Services */}
        <section className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Our Services</h2>
              <p className="description">
                Delivering innovative digital solutions that align with your business goals.
              </p>
            </div>
            <DevelopmentDesign />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="rbt-about-area about-style-2 bg-color-light rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Our Tech Stack</h2>
              <p className="description">
                Building with modern technologies for scalable, maintainable code.
              </p>
            </div>
            <AcademyGalleryTwo />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Featured Projects</h2>
              <p className="description">
                Success stories that showcase our expertise across industries.
              </p>
            </div>
            <AcademyGalleryThree />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="rbt-about-area about-style-2 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Why Choose Swatrixsoft?</h2>
              <p className="description">
                We combine local insights with global best practices to drive measurable results.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 mb--40">
                <h5>Agile & Transparent</h5>
                <p>Regular demos, clear sprints, and full visibility—you're always in the loop.</p>
              </div>
              <div className="col-md-4 mb--40">
                <h5>Deep Expertise</h5>
                <p>10+ years delivering enterprise-grade Web, Mobile & AI solutions worldwide.</p>
              </div>
              <div className="col-md-4 mb--40">
                <h5>End-to-End Support</h5>
                <p>From launch to scaling, we stay by your side with 24/7 maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="rbt-about-area about-style-1 bg-color-light rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Our Process</h2>
              <p className="description">
                A proven 4-step approach ensuring quality and timely delivery.
              </p>
            </div>
            <ul className="rbt-process-list d-flex justify-content-between">
              <li>
                <span className="step">1</span>
                <strong>Discovery</strong>
                <p>Requirements, research & roadmap.</p>
              </li>
              <li>
                <span className="step">2</span>
                <strong>Design</strong>
                <p>Wireframes, UI/UX & prototyping.</p>
              </li>
              <li>
                <span className="step">3</span>
                <strong>Develop</strong>
                <p>Agile sprints & iterative builds.</p>
              </li>
              <li>
                <span className="step">4</span>
                <strong>Deploy</strong>
                <p>QA, go-live & ongoing support.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call To Action */}
        <section className="rbt-cta-area bg-color-primary rbt-section-gap py--80 text-center">
          <div className="container">
            <h2 className="title mb--20 text-white">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="description mb--40 text-white">
              Let’s discuss your project and craft a custom solution that drives real results.
            </p>
            <a href="/contact" className="rbt-btn btn-white">
              Get a Free Consultation
            </a>
          </div>
        </section>

        <Separator />
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default DevelopmentandDesign;
