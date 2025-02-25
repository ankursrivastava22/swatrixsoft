"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import CourseCard from "../../data/course-details/courseData.json";

const CardSix = ({ parentClass, childClass, types }) => {
  const [courseFilter, setCourseFilter] = useState("");

  const filterItem = (types) => {
    const updateItem = CourseCard.courseDetails.filter((curElm) => {
      return curElm.courseType === types;
    });

    setCourseFilter(updateItem);
  };

  useEffect(() => {
    filterItem(types);
  }, []);

  return (
    <>
      {courseFilter &&
        courseFilter.map((data, index) => (
          <div className={parentClass} key={index}>
            <div className={childClass}>
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={597}
                    height={454}
                    alt="Card image"
                  />
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
                      ({data.review} Reviews)
                    </span>
                  </div>
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" title="Bookmark" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                <h4 className="rbt-card-title">
                  <Link href={`/course-details/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>

                <ul className="rbt-meta mb--10">
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

                <ul className="rbt-meta rbt-meta-badge mb--20">
                  {data.courseTag.map((inner, i) => (
                    <li key={i}>
                      <Link href="#">
                        <span className="rbt-badge">{inner}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="rbt-author-meta mb--10">
                  <div className="rbt-avater">
                    <Link href={`/profile/${data.id}`}>
                      <Image
                        src={data.userImg}
                        width={33}
                        height={33}
                        alt="Sophia Jaymes"
                      />
                    </Link>
                  </div>
                  <div className="rbt-author-info">
                    By <Link href={`/profile/${data.id}`}>{data.userName}</Link>
                    In <Link href="#">{data.userCategory}</Link>
                  </div>
                </div>
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  <Link
                    className="rbt-btn-link left-icon"
                    href={`/course-details/${data.id}`}
                  >
                    <i className="feather-shopping-cart"></i> Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardSix;
