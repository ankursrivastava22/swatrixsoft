"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import BreadCrumb from "../Common/BreadCrumb";
import ProductBody from "./ProductBody";
import ReviewForm from "./ReviewForm";
import RelatedProduct from "./RelatedProduct";

const SingleProduct = ({ checkMatchProduct }) => {
  const [tab, setTab] = useState(false);

  return (
    <>
      <BreadCrumb title="Single Product" text="Single Product" />

      <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
        <div className="container">
          <ProductBody product={checkMatchProduct} />
        </div>
      </div>

      <div className="rbt-product-description rbt-section-gapBottom bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ul
                className="nav nav-tabs tab-button-style-2"
                id="myTab"
                role="tablist"
              >
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => setTab(!tab)}
                >
                  <a
                    href="#"
                    className="tab-button active"
                    id="home-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#home-4"
                    role="tab"
                    aria-controls="home-tab-4"
                    aria-selected="true"
                  >
                    <span className="title">Description</span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => setTab(!tab)}
                >
                  <a
                    href="#"
                    className="tab-button"
                    id="profile-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-4"
                    role="tab"
                    aria-controls="profile-tab-4"
                    aria-selected="false"
                  >
                    <span className="title">Reviews</span>
                  </a>
                </li>
              </ul>

              <div
                className={`product-description-content tab-pan fad ${
                  tab ? "d-none" : "d-block"
                }`}
                id="home-4"
                role="tabpanel"
                aria-labelledby="home-tab-4"
              >
                <p>{checkMatchProduct.desc}</p>
                <p>{checkMatchProduct.descTwo}</p>
              </div>

              <div
                className={`product-description-content tab-pan fad ${
                  tab ? "d-block" : "d-none"
                }`}
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <ul className="comment-list">
                  {checkMatchProduct &&
                    checkMatchProduct.review.map((data, index) => (
                      <li className="comment" key={index}>
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <Image
                                src={data.userImg}
                                width={59}
                                height={59}
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a href="#">{data.name}</a>
                              </h6>
                              <div className="comment-meta">
                                <div className="time-spent">{data.date}</div>
                              </div>
                              <div className="rbt-review justify-content-start mb--20">
                                <div className="rating">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p className="b2">{data.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>

                <div className="rbt-comment-form mt--50 rbt-shadow-box">
                  <div className="comment-form-inner">
                    <h3 className="title">Add Review</h3>
                  </div>
                  <ReviewForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-related-product rbt-section-gapBottom bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--50">
                <span className="subtitle bg-secondary-opacity">
                  Related Book
                </span>
                <h2 className="title">Similar Books.</h2>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <RelatedProduct
              relatedProduct={checkMatchProduct && checkMatchProduct.related}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
