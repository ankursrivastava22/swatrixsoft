import React from "react";
import Link from "next/link";

const HeaderTopTwo = ({ gapSpaceBetween, container }) => {
  return (
    <>
      <div
        className={`rbt-header-top rbt-header-top-2 ${gapSpaceBetween} pt--15 pb--15 d-none d-xl-block`}
      >
        <div className={`${container}`}>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
              <div className="fancy-menu-text fancu-menu-start">
                <p>
                  <Link href="#">
                    Get the most advanced template
                    <i className="feather-chevron-right"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="fancy-menu-address fancu-menu-end">
                <div className="address-content">
                  <p>
                    <i className="feather-map-pin"></i>
                    <span>Alabama, USA</span>
                  </p>
                  <p>
                    <i className="feather-phone"></i>
                    <span>
                      <Link href="#">+1-202-555-0174</Link>
                    </span>
                  </p>
                </div>
                <div className="social-icon-wrapper">
                  <ul className="social-icon social-default icon-naked">
                    <li>
                      <Link href="https://www.facebook.com/">
                        <i className="feather-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.twitter.com">
                        <i className="feather-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/">
                        <i className="feather-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkdin.com/">
                        <i className="feather-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopTwo;
