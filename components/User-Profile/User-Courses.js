"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import sal from "sal.js";

const UserCourses = ({ relatedCourse }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      {relatedCourse.body.map((data, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-12 col-12"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
          key={index}
        >
          <div className="rbt-card variation-01 rbt-hover">
            <div className="rbt-card-img">
              <Link href={`/course-details/${data.id}`}>
                <Image
                  src={data.img}
                  width={355}
                  height={244}
                  alt="Card image"
                />
                <div className="rbt-badge-3 bg-white">
                  <span>-{data.discount}%</span>
                  <span>Off</span>
                </div>
              </Link>
            </div>
            <div className="rbt-card-body">
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="rating-count"> ({data.rating} Reviews)</span>
                </div>
                <div className="rbt-bookmark-btn">
                  <Link className="rbt-round-btn" title="Bookmark" href="#">
                    <i className="feather-bookmark"></i>
                  </Link>
                </div>
              </div>

              <h4 className="rbt-card-title">
                <Link href={`/course-details/${data.id}`}>{data.title}</Link>
              </h4>

              <ul className="rbt-meta">
                <li>
                  <i className="feather-book"></i>
                  {data.lesson} Lessons
                </li>
                <li>
                  <i className="feather-users"></i>
                  {data.student} Students
                </li>
              </ul>

              <p className="rbt-card-text">{data.desc}</p>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <Link href={`/profile/${data.id}`}>
                    <Image
                      src={data.avatar}
                      width={33}
                      height={33}
                      alt="Sophia Jaymes"
                    />
                  </Link>
                </div>
                <div className="rbt-author-info">
                  By <Link href={`/profile/${data.id}`}>{data.author}</Link> In
                  <Link href="#">{data.post}</Link>
                </div>
              </div>
              <div className="rbt-card-bottom">
                <div className="rbt-price">
                  <span className="current-price">${data.price}</span>
                  <span className="off-price">${data.offPrice}</span>
                </div>
                <Link
                  className="rbt-btn-link"
                  href={`/course-details/${data.id}`}
                >
                  Learn More<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCourses;
