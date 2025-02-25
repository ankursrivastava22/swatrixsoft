import Link from "next/link";
import React from "react";

const Banner = ({ text, col, blogdata }) => {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className={col}>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">{text}</li>
                  </ul>

                  <div className=" title-wrapper">
                    <h1 className="title mb--0">{text}</h1>
                    <Link href="#" className="rbt-badge-2">
                      <div className="image">🎉</div>
                      {blogdata ? `${blogdata.length} Articles` : "50 Articles"}
                    </Link>
                  </div>

                  <p className="description">
                    Blog that help beginner designers become true unicorns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
