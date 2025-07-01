// pages/enterprise-software.js
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

import AcademyGalleryTwo from "@/components/Academy-Gallery/AcademyGallery-Two";
import AcademyGalleryThree from "@/components/Academy-Gallery/AcademyGallery-Three";
import EnterpriseSoftware from "@/components/enterprise-software/EnterpriseSoftware";

const EnterpriseSoftwarePage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        <BreadCrumb
          title="Swatrixsoft – Enterprise Software Solutions & Automation"
          text="Robust, Scalable Systems Tailored for Your Organization"
        />

        {/* Enterprise Software Services */}
        <section className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Enterprise Software Services</h2>
              <p className="description">
                End-to-end enterprise-grade solutions for CRM, ERP, BPM and beyond.
              </p>
            </div>
            <EnterpriseSoftware />
          </div>
        </section>

        {/* Our Tech Stack */}
        <section className="rbt-about-area about-style-2 bg-color-light rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Our Tech Stack</h2>
              <p className="description">
                Trusted technologies powering secure and scalable enterprise applications.
              </p>
            </div>
            <AcademyGalleryTwo />
          </div>
        </section>

        {/* Featured Enterprise Projects */}
        <section className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Featured Enterprise Projects</h2>
              <p className="description">
                Case studies showcasing optimized workflows and measurable ROI.
              </p>
            </div>
            <AcademyGalleryThree />
          </div>
        </section>

        {/* Why Choose Swatrixsoft? */}
        <section className="rbt-about-area about-style-2 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h2 className="title">Why Choose Swatrixsoft?</h2>
              <p className="description">
                We marry local insight with global best practices for enterprise success.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 mb--40">
                <h5>Agile & Transparent</h5>
                <p>Regular demos, clear sprints—full visibility at every stage.</p>
              </div>
              <div className="col-md-4 mb--40">
                <h5>Scalable Architecture</h5>
                <p>Microservices, serverless options, and cloud-native design.</p>
              </div>
              <div className="col-md-4 mb--40">
                <h5>24/7 Support</h5>
                <p>Dedicated monitoring and rapid-response maintenance.</p>
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
                A proven 4-step methodology ensuring timely delivery and quality.
              </p>
            </div>
            <ul className="rbt-process-list d-flex justify-content-between">
              <li>
                <span className="step">1</span>
                <strong>Discovery</strong>
                <p>Gather requirements, audit existing systems, define roadmap.</p>
              </li>
              <li>
                <span className="step">2</span>
                <strong>Design</strong>
                <p>Architecture blueprints, UI/UX wireframes, prototyping.</p>
              </li>
              <li>
                <span className="step">3</span>
                <strong>Develop</strong>
                <p>Agile sprints, unit testing, continuous integration.</p>
              </li>
              <li>
                <span className="step">4</span>
                <strong>Deploy</strong>
                <p>Staging, production rollout, and ongoing DevOps support.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call To Action */}
        <section className="rbt-cta-area bg-color-primary rbt-section-gap py--80 text-center">
          <div className="container">
            <h2 className="title mb--20 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="description mb--40 text-white">
              Talk to our experts and unlock the full potential of your business systems.
            </p>
            <a href="/contact" className="rbt-btn btn-white">
              Schedule a Free Consultation
            </a>
          </div>
        </section>

        <Separator />
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default EnterpriseSoftwarePage;
