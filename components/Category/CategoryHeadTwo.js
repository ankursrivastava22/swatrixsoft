"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";

import CourseFilterTwo from "./Filter/CourseFilterTwo";
import { useAppContext } from "@/context/Context";

const CategoryHeadTwo = ({ category }) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);

  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>

        <div className="rbt-banner-content">
          {category ? (
            <CategoryBanner category={category} />
          ) : (
            <CategoryBanner />
          )}

          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item switch-layout-container">
                      <ul className="course-switch-layout">
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              toggle ? "active" : ""
                            }`}
                            title="Grid Layout"
                            onClick={() => setToggle(!toggle)}
                          >
                            <i className="feather-grid"></i>
                            <span className="text">Grid</span>
                          </button>
                        </li>
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              !toggle ? "active" : ""
                            }`}
                            title="List Layout"
                            onClick={() => setToggle(!toggle)}
                          >
                            <i className="feather-list"></i>
                            <span className="text">List</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    {category && (
                      <div className="rbt-short-item">
                        {category.id ? (
                          <span className="course-index">
                            Showing 1-{category.id} of {category.id} results
                          </span>
                        ) : (
                          <span className="course-index">
                            Showing 1-{category.length / 2} of {category.length}
                            results
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <form action="#" className="rbt-search-style me-0">
                        <input type="text" placeholder="Search Your Course.." />
                        <button
                          type="submit"
                          className="rbt-search-btn rbt-round-btn"
                        >
                          <i className="feather-search"></i>
                        </button>
                      </form>
                    </div>
                    {pathname === "/course-filter-two-open" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item">
                        <div className="view-more-btn text-start text-sm-end">
                          <button
                            className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                            onClick={() => setFilterToggle(!filterToggle)}
                          >
                            Filter<i className="feather-filter"></i>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {pathname === "/course-filter-two-open" ? (
                <CourseFilterTwo />
              ) : (
                <div
                  className={`row default-exp-wrapper ${
                    filterToggle ? "default-exp-expand" : ""
                  } top-border-less`}
                >
                  <CourseFilterTwo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeadTwo;
