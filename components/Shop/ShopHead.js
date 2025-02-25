import Link from "next/link";
import React from "react";

const ShopHead = ({ shopProduct, getSelectedCourse }) => {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">All Products</li>
                  </ul>

                  <div className=" title-wrapper">
                    <h1 className="title mb--0">All Products</h1>
                    <Link href="#" className="rbt-badge-2">
                      <div className="image">🎉</div> {shopProduct.shop.length}
                      <span className="ms-2">Products</span>
                    </Link>
                  </div>

                  <p className="description">
                    Products that help beginner designers become true unicorns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-course-top-wrapper mt--40">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item">
                      <span className="course-index">
                        Showing 1-{getSelectedCourse.length}
                        <span className="me-2">of</span>
                        {shopProduct.shop.length} results
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <div className="filter-select">
                        <span className="select-label d-block">Short By</span>
                        <div className="filter-select rbt-modern-select search-by-category">
                          <select>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopHead;
