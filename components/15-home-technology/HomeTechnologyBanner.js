import Image from "next/image";
import React from "react";

import brand1 from "../../public/images/brand/partner-5.webp";
import brand2 from "../../public/images/brand/partner-1.webp";
import brand3 from "../../public/images/brand/partner-6.webp";
import brand4 from "../../public/images/brand/partner-3.webp";

const HomeTechnologyBanner = () => {
  return (
    <>
      <div className="wrapper bg-color-secondary-alt">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <div className="inner text-center">
                  <div className="section-title">
                    <span className="subtitle bg-primary-opacity">
                      SwatrixSoft
                    </span>
                  </div>

                  <h1 className="banner-title">
                    Website Development Company
                    <span className="theme-gradient"> In Jodhpur</span>
                  </h1>

                  <p className="description has-medium-font-size mt--20">
                  We craft high-performance, secure, and scalable websites using a diverse range of modern technologies. Let us bring your vision to life.
                  </p>

                  <div className="slider-btn rbt-button-group justify-content-center">
                    <a
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                      href="/about-us-01"
                    >
                      <span data-text="Learn More About Us">
                        Learn More About Us
                      </span>
                    </a>
                  </div>
                  <div className="brand-area mt--60">
                    <span className="follow-us-text">
                      Making sensitive clients more valuable for companies like
                    </span>
                    <ul className="brand-list brand-style-3 justify-content-start justify-content-lg-between">
                      <li>
                        <a href="#">
                          <Image
                            src={brand1}
                            width={120}
                            height={135}
                            alt="Brand Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src={brand2}
                            width={120}
                            height={135}
                            alt="Brand Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src={brand1}
                            width={120}
                            height={135}
                            alt="Brand Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src={brand3}
                            width={120}
                            height={135}
                            alt="Brand Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src={brand4}
                            width={120}
                            height={135}
                            alt="Brand Image"
                          />
                        </a>
                      </li>
                    </ul>
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

export default HomeTechnologyBanner;
