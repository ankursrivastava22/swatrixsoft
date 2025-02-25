"use client"

import { useAppContext } from "@/context/Context";
import React from "react";

const SearchWithCategory = () => {
  const { search } = useAppContext();
  return (
    <>
      <div
        className={`rbt-search-dropdown search-with-category-popup ${
          !search ? "active" : ""
        }`}
      >
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-search-with-category">
                <div className="filter-select rbt-modern-select search-by-category">
                  <select>
                    <option>All Categories</option>
                    <option>Education</option>
                    <option>Course</option>
                    <option>Art</option>
                    <option>Web Design</option>
                  </select>
                </div>

                <div className="search-field">
                  <input type="text" placeholder="Search Course" />
                  <button className="rbt-round-btn serach-btn" type="submit">
                    <i className="feather-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchWithCategory;
