import React from "react";
import Link from "next/link";
import Image from "next/image";

import img from "../../public/images/blog/blog-card-01.jpg";
import bgImg from "../../public/images/bg/bg-image-10.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-image-wrapper">
            <div className="breadcrumb-dark">
              <Image src={bgImg} alt="IT Solutions Background" />
            </div>
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Privacy Policy</h1>
            <p className="mb--20">Swatrixsoft IT Solutions Privacy Policy</p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
              <Image className="w-100" src={img} alt="Privacy Policy Image" />
            </div>
            <div className="content">
              <h4>Welcome to Swatrixsoft Privacy Policy</h4>
              <ol>
                <li>
                  Swatrixsoft is committed to protecting your personal information while delivering world‑class IT solutions. We collect and process data solely to enhance and customize our digital services.
                </li>
                <li>
                  We implement robust security measures to ensure your data remains confidential and is used only in accordance with applicable legal requirements.
                </li>
                <li>
                  This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your data as part of our comprehensive IT service offering.
                </li>
              </ol>

              <h4>The Types of Personal Information We Collect</h4>

              <ol>
                <li>
                  We gather essential information such as your name, email, and contact details when you interact with our website and services.
                  <Link href="https://www.swatrixsoft.com/privacy">
                    https://www.swatrixsoft.com/privacy
                  </Link>
                </li>
                <li>
                  Additional details, including browsing behavior and usage preferences, help us optimize our solutions and provide a personalized experience.
                </li>
              </ol>

              <h4>How We Collect Personal Information</h4>

              <ol>
                <li>
                  Information is collected via secure online forms, user registrations, and direct communication with our support team.
                </li>
                <li>
                  We also use cookies and tracking technologies to monitor user interactions and improve site functionality.
                </li>
                <li>
                  All data is handled in strict compliance with industry standards and legal requirements, ensuring complete confidentiality and integrity.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
