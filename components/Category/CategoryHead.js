"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";
import CourseFilter from "./Filter/CourseFilter";
import { useAppContext } from "@/context/Context";

const CategoryHead = ({
  category,
  filterItem,
  courseFilter,
  setCourseFilter,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("All Course");

  const handleButtonClick = (courseType) => {
    setCourseFilter(category);
    setActiveTab(courseType);
    filterItem(courseType);
  };

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
                    {pathname === "/course-card-3" ||
                    pathname === "/course-masonry" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item switch-layout-container">
                        <ul className="course-switch-layout">
                          <li className="course-switch-item">
                            <button
                              className={`rbt-grid-view ${
                                pathname === "/course-card-2"
                                  ? !toggle
                                    ? "active"
                                    : ""
                                  : toggle
                                  ? "active"
                                  : ""
                              }`}
                              title="Grid Layout"
                              onClick={() => setToggle(!toggle)}
                            >
                              <i className="feather-grid"></i>
                              <span className="text ms-2">Grid</span>
                            </button>
                          </li>
                          <li className="course-switch-item">
                            <button
                              className={`rbt-grid-view ${
                                pathname === "/course-card-2"
                                  ? toggle
                                    ? "active"
                                    : ""
                                  : !toggle
                                  ? "active"
                                  : ""
                              }`}
                              title="List Layout"
                              onClick={() => setToggle(!toggle)}
                            >
                              <i className="feather-list"></i>
                              <span className="text ms-2">List</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    {category && (
                      <div className="rbt-short-item">
                        {category.id ? (
                          <span className="course-index">
                            Showing 1-{category.id} of {category.id} results
                          </span>
                        ) : (
                          <span className="course-index">
                            Showing 1-{category.length / 2} of {category.length}
                            <span className="ms-1">results</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end">
                    {pathname === "/course-with-sidebar" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item">
                        <form action="#" className="rbt-search-style me-0">
                          <input
                            type="text"
                            placeholder="Search Your Course.."
                          />
                          <button
                            type="submit"
                            className="rbt-search-btn rbt-round-btn"
                          >
                            <i className="feather-search"></i>
                          </button>
                        </form>
                      </div>
                    )}

                    {pathname === "/course-with-tab" ||
                    pathname === "/course-with-tab-two" ||
                    pathname === "/course-with-sidebar" ? (
                      <div className="rbt-short-item">
                        <div className="filter-select">
                          <span className="select-label d-block">Short By</span>
                          <div className="filter-select rbt-modern-select search-by-category">
                            <select data-size="7">
                              <option>Default</option>
                              <option>Latest</option>
                              <option>Popularity</option>
                              <option>Trending</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {pathname === "/course-filter-two-open" ||
                    pathname === "/course-filter-two-toggle" ||
                    pathname === "/course-filter-one-toggle" ||
                    pathname === "/course-card-2" ||
                    pathname === "/course-card-3" ||
                    pathname === "/course-masonry" ? (
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
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {pathname === "/course-filter-one-open" ? (
                  <CourseFilter />
                ) : (
                  <CourseFilter filterToggle={filterToggle} />
                )}

                {pathname === "/course-with-tab" ||
                pathname === "/course-with-tab-two" ||
                pathname === "/course-masonry" ? (
                  <div className="col-lg-12 mt--60">
                    <ul
                      className="rbt-portfolio-filter filter-tab-button justify-content-start nav nav-tabs"
                      id="rbt-myTab"
                      role="tablist"
                    >
                      {[
                        "All Course",
                        "featured",
                        "popular",
                        "trending",
                        "latest",
                      ].map((courseType, index) => (
                        <li
                          key={index}
                          className="nav-item"
                          role="presentation"
                        >
                          <button
                            className={activeTab === courseType ? "active" : ""}
                            type="button"
                            onClick={() => handleButtonClick(courseType)}
                          >
                            <span className="filter-text">{courseType}</span>
                            {courseType === "All Course" ? (
                              <span className="course-number">
                                {category.filter((course) => course).length}
                              </span>
                            ) : (
                              <span className="course-number">
                                0
                                {
                                  category.filter(
                                    (course) => course.courseType === courseType
                                  ).length
                                }
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHead;
