"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Featured = ({ coursesFeatured }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
      >
        <div className="section-title">
          <h4 className="rbt-title-style-3">{coursesFeatured.title}</h4>
        </div>
        <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
          {coursesFeatured.body.map((user, innerIndex) => (
            <div className="rbt-course-review about-author" key={innerIndex}>
              <div className="media">
                <div className="thumbnail">
                  <Link href="#">
                    <Image
                      src={user.userImg}
                      width={105}
                      height={105}
                      alt="Author Images"
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <div className="author-info">
                    <h5 className="title">
                      <Link className="hover-flip-item-wrapper" href="#">
                        {user.userName}
                      </Link>
                    </h5>
                    <div className="rating">
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content">
                    <p className="description">{user.desc}</p>
                    <ul className="social-icon social-default transparent-with-border justify-content-start">
                      <li>
                        <Link href="#">
                          <i className="feather-thumbs-up"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="feather-thumbs-down"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Show More
        </div>
      </div>
    </>
  );
};

export default Featured;
