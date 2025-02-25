import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarCourses = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="container">
        <div className="section-title mb--30">
          <span className="subtitle bg-primary-opacity">
            More Similar Courses
          </span>
          <h4 className="title">Related Courses</h4>
        </div>
        <div className="row g-5">
          {checkMatchCourses &&
            checkMatchCourses.map((item, innerIndex) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={innerIndex}
              >
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        width={355}
                        height={244}
                        alt="Card image"
                      />
                      {item.discount > 0 ? (
                        <div className="rbt-badge-3 bg-white">
                          <span>-{item.discount}%</span>
                          <span>Off</span>
                        </div>
                      ) : (
                        ""
                      )}
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
                        <span className="rating-count">
                          ({item.rating} Reviews)
                        </span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <Link
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="#"
                        >
                          <i className="feather-bookmark"></i>
                        </Link>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <Link href={item.link}>{item.title}</Link>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>
                        {item.lesson} Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>
                        {item.student} Students
                      </li>
                    </ul>

                    <p className="rbt-card-text">{item.desc}</p>

                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <Link href={`/profile/${item.id}`}>
                          <Image
                            src={item.avatar}
                            width={33}
                            height={33}
                            alt="Sophia Jaymes"
                          />
                        </Link>
                      </div>
                      <div className="rbt-author-info">
                        By
                        <Link href={`/profile/${item.id}`}>{item.author}</Link>
                        In
                        <Link href="#">{item.post}</Link>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">${item.price}</span>
                        <span className="off-price">${item.offPrice}</span>
                      </div>
                      <Link className="rbt-btn-link" href="/course-details">
                        Learn More<i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SimilarCourses;
