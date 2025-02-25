"use client";

import React, { useState } from "react";

const CourseSidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <aside className="rbt-sidebar-widget-wrapper">
        <div className="rbt-single-widget rbt-widget-search">
          <div className="inner">
            <form action="#" className="rbt-search-style-1">
              <input type="text" placeholder="Search Courses" />
              <button className="search-btn">
                <i className="feather-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div
          className={`rbt-single-widget rbt-widget-categories ${
            show ? "has-show-more" : ""
          }`}
        >
          <div className="inner">
            <h4 className="rbt-widget-title">Categories</h4>
            <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
              <li className="rbt-check-group">
                <input id="cat-list-1" type="checkbox" name="cat-list-1" />
                <label htmlFor="cat-list-1">
                  Art &amp; Humanities
                  <span className="rbt-lable count">15</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-2" type="checkbox" name="cat-list-2" />
                <label htmlFor="cat-list-2">
                  Web Design <span className="rbt-lable count">20</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-3" type="checkbox" name="cat-list-3" />
                <label htmlFor="cat-list-3">
                  Graphic Design <span className="rbt-lable count">10</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-4" type="checkbox" name="cat-list-4" />
                <label htmlFor="cat-list-4">
                  Art &amp; Humanities
                  <span className="rbt-lable count">15</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-5" type="checkbox" name="cat-list-5" />
                <label htmlFor="cat-list-5">
                  Technology <span className="rbt-lable count">20</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-6" type="checkbox" name="cat-list-6" />
                <label htmlFor="cat-list-6">
                  Humanities Art <span className="rbt-lable count">25</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-7" type="checkbox" name="cat-list-7" />
                <label htmlFor="cat-list-7">
                  Management <span className="rbt-lable count">50</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-8" type="checkbox" name="cat-list-8" />
                <label htmlFor="cat-list-8">
                  Photoshop <span className="rbt-lable count">45</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-9" type="checkbox" name="cat-list-9" />
                <label htmlFor="cat-list-9">
                  Online Course <span className="rbt-lable count">45</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-10" type="checkbox" name="cat-list-10" />
                <label htmlFor="cat-list-10">
                  English Clud <span className="rbt-lable count">45</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-list-11" type="checkbox" name="cat-list-11" />
                <label htmlFor="cat-list-11">
                  Graphic Design <span className="rbt-lable count">45</span>
                </label>
              </li>
            </ul>
          </div>
          <div
            className={`rbt-show-more-btn ${show ? "" : "active"}`}
            onClick={() => setShow(!show)}
          >
            Show More
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-rating">
          <div className="inner">
            <h4 className="rbt-widget-title">Ratings</h4>
            <ul className="rbt-sidebar-list-wrapper rating-list-check">
              <li className="rbt-check-group">
                <input id="cat-radio-1" type="radio" name="rbt-radio" />
                <label htmlFor="cat-radio-1">
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="rbt-lable count">5</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-radio-2" type="radio" name="rbt-radio" />
                <label htmlFor="cat-radio-2">
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                  </span>
                  <span className="rbt-lable count">4</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-radio-3" type="radio" name="rbt-radio" />
                <label htmlFor="cat-radio-3">
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                  </span>
                  <span className="rbt-lable count">3</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="cat-radio-4" type="radio" name="rbt-radio" />
                <label htmlFor="cat-radio-4">
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                  </span>
                  <span className="rbt-lable count">2</span>
                </label>
              </li>

              <li className="rbt-check-group">
                <input id="cat-radio-5" type="radio" name="rbt-radio" />
                <label htmlFor="cat-radio-5">
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                    <i className="off fas fa-star"></i>
                  </span>
                  <span className="rbt-lable count">1</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-instructor">
          <div className="inner">
            <h4 className="rbt-widget-title">Instructors</h4>
            <ul className="rbt-sidebar-list-wrapper instructor-list-check">
              <li className="rbt-check-group">
                <input id="ins-list-1" type="checkbox" name="ins-list-1" />
                <label htmlFor="ins-list-1">
                  Slaughter <span className="rbt-lable count">15</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="ins-list-2" type="checkbox" name="ins-list-2" />
                <label htmlFor="ins-list-2">
                  Patrick <span className="rbt-lable count">20</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="ins-list-3" type="checkbox" name="ins-list-3" />
                <label htmlFor="ins-list-3">
                  Angela <span className="rbt-lable count">10</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input id="ins-list-4" type="checkbox" name="ins-list-4" />
                <label htmlFor="ins-list-4">
                  Fatima Asrafy <span className="rbt-lable count">15</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-prices">
          <div className="inner">
            <h4 className="rbt-widget-title">Prices</h4>
            <ul className="rbt-sidebar-list-wrapper prices-list-check">
              <li className="rbt-check-group">
                <input
                  id="prices-list-1"
                  type="checkbox"
                  name="prices-list-1"
                />
                <label htmlFor="prices-list-1">
                  All <span className="rbt-lable count">15</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input
                  id="prices-list-2"
                  type="checkbox"
                  name="prices-list-2"
                />
                <label htmlFor="prices-list-2">
                  Free <span className="rbt-lable count">0</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input
                  id="prices-list-3"
                  type="checkbox"
                  name="prices-list-3"
                />
                <label htmlFor="prices-list-3">
                  Paid <span className="rbt-lable count">10</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-lavels">
          <div className="inner">
            <h4 className="rbt-widget-title">Levels</h4>
            <ul className="rbt-sidebar-list-wrapper lavels-list-check">
              <li className="rbt-check-group">
                <input
                  id="lavels-list-1"
                  type="checkbox"
                  name="lavels-list-1"
                />
                <label htmlFor="lavels-list-1">
                  All Levels<span className="rbt-lable count">15</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input
                  id="lavels-list-2"
                  type="checkbox"
                  name="lavels-list-2"
                />
                <label htmlFor="lavels-list-2">
                  Beginner <span className="rbt-lable count">0</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input
                  id="lavels-list-3"
                  type="checkbox"
                  name="lavels-list-3"
                />
                <label htmlFor="lavels-list-3">
                  Intermediate <span className="rbt-lable count">10</span>
                </label>
              </li>
              <li className="rbt-check-group">
                <input
                  id="lavels-list-4"
                  type="checkbox"
                  name="lavels-list-4"
                />
                <label htmlFor="lavels-list-4">
                  Expert <span className="rbt-lable count">10</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CourseSidebar;
