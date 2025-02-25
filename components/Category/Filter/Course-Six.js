"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../../data/course-details/courseData.json";

const CourseSix = () => {
  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );
  const [courseFilter, setCourseFilter] = useState(getAllCourse);
  const [activeTab, setActiveTab] = useState("All Course");

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  const handleButtonClick = (courseType) => {
    setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    filterItem(courseType);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <ul
            className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
            id="rbt-myTab"
            role="tablist"
          >
            {["All Course", "featured", "popular", "trending", "latest"].map(
              (courseType, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <button
                    className={activeTab === courseType ? "active" : ""}
                    type="button"
                    onClick={() => handleButtonClick(courseType)}
                  >
                    <span className="filter-text">{courseType}</span>
                    {courseType === "All Course" ? (
                      <span className="course-number">
                        {getAllCourse.filter((course) => course).length}
                      </span>
                    ) : (
                      <span className="course-number">
                        0
                        {
                          getAllCourse.filter(
                            (course) => course.courseType === courseType
                          ).length
                        }
                      </span>
                    )}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content mt--60" id="rbt-myTabContent">
            <div className="row g-5">
              {courseFilter.slice(0, 4).map((data, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                  key={index}
                >
                  <div className={`rbt-card variation-01 rbt-hover `}>
                    <div className="rbt-card-img">
                      <Link href={`/course-details/${data.id}`}>
                        <Image
                          src={data.courseImg}
                          width={355}
                          height={244}
                          alt="Card image"
                        />
                        <div className="rbt-badge-3 bg-white">
                          <span>-{data.offPrice}%</span>
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
                          <span className="rating-count">
                            ({data.review} Reviews)
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
                        <Link href={`/course-details/${data.id}`}>
                          {data.courseTitle}
                        </Link>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSix;
