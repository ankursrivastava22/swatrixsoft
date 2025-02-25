import React from "react";

const SearchThree = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form action="#" className="rbt-search-style me-0">
            <input type="text" placeholder="Search Your Course.." />
            <button type="submit" className="rbt-search-btn rbt-round-btn">
              <i className="feather-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchThree;
