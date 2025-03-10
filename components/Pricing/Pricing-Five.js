import Link from "next/link";
import React from "react";

const PricingFive = ({ title, tag }) => {
  return (
    <>
      <div className="container">
        {title ? (
          <div className="row g-5 mb--60">
            <div className="col-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">{tag}</span>
                <h2 className="title">{title}</h2>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="advance-pricing">
              <div className="inner">
                <div className="row row--0">
                  {/* Premium IT Solution Plan */}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="pricing-left">
                      <h3 className="main-title">Premium IT Solution Plan</h3>
                      <p className="description">
                        Our premium plan offers a comprehensive suite of advanced IT services, including custom software development, cloud integration, and robust cybersecurity—tailored to meet enterprise-level demands.
                      </p>
                      <div className="price-wrapper">
                        <span className="price-amount">
                          $129<sup>/mo</sup>
                        </span>
                      </div>
                      <div className="pricing-btn-group">
                        <button className="rbt-btn btn-gradient w-100">
                          Get Started
                        </button>
                        <button className="rbt-btn btn-border w-100">
                          Learn More
                        </button>
                      </div>
                      <div className="rating">
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                      </div>
                      <small className="subtitle">
                        Rated 4.5/5 Stars in 1000+ reviews.
                      </small>
                    </div>
                  </div>
                  {/* Standard IT Solution Plan */}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="pricing-right position-relative">
                      <div className="pricing-offer">
                        <div className="single-list">
                          <h4 className="price-title">
                            Advanced IT Solutions
                          </h4>
                          <ul className="plan-offer-list">
                            <li>
                              <i className="feather-check"></i> Custom Software Development
                            </li>
                            <li>
                              <i className="feather-check"></i> Cloud Integration
                            </li>
                            <li>
                              <i className="feather-check"></i> Enterprise Security
                            </li>
                            <li>
                              <i className="feather-check"></i> Scalable Infrastructure
                            </li>
                          </ul>
                        </div>
                        <div className="single-list mt--40">
                          <h4 className="price-title">
                            Standard IT Solutions
                          </h4>
                          <ul className="plan-offer-list">
                            <li>
                              <i className="feather-check"></i> Responsive Web Design
                            </li>
                            <li>
                              <i className="feather-check"></i> Basic App Development
                            </li>
                            <li>
                              <i className="feather-check"></i> SEO & Content Strategy
                            </li>
                            <li>
                              <i className="feather-check"></i> Optimized System Performance
                            </li>
                            <li>
                              <i className="feather-check"></i> App Development
                            </li>
                            <li className="off">
                              <i className="feather-x"></i> 24/7 Dedicated Support
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="pricing-badge">
                        <span>Popular</span>
                      </div>
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

export default PricingFive;
