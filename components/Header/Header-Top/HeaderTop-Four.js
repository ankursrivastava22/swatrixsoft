import { useAppContext } from '@/context/Context';
import Link from 'next/link';
import React from 'react'

const HeaderTopFour = ({
  gapSpaceBetween,
  bgColor,
  flexDirection,
  btnText,
  btnClass,
  container,
}) =>  {
  const { toggle, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`rbt-header-top rbt-header-top-1 variation-height-50 ${gapSpaceBetween} ${bgColor} d-none d-xl-block ${
          !toggle ? "d-none" : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`rbt-header-sec align-items-center ${flexDirection}`}>
            <div className="rbt-header-sec-col rbt-header-left">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-information-list">
                    <li>
                      <Link href="#">
                        <i className="feather-phone"></i>+1-202-555-0174
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rbt-separator"></div>
                <div className="header-info">
                  <ul className="social-share-transparent">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rbt-header-sec-col rbt-header-right">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-secondary-menu">
                    <li>
                      <Link href="/my-account">My Account</Link>
                    </li>
                    <li>
                      <Link href="#">FAQ</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Condition</Link>
                    </li>
                  </ul>
                </div>
                <div className="rbt-separator"></div>
                <div className="header-info" onClick={() => setToggle(!toggle)}>
                  <div className="header-right-btn d-flex">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
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

export default HeaderTopFour