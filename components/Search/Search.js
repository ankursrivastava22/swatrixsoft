import React from "react";

const Search = () => {
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6">
          <span className="select-label d-block">Search Style 01</span>
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

        <div className="col-lg-5 offset-lg-1">
          <div className="filter-select rbt-modern-select search-by-category">
            <span className="select-label d-block">Short By</span>
            <select>
              <option>All Categories</option>
              <option>Education</option>
              <option>Course</option>
              <option>Art</option>
              <option>Web Design</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
