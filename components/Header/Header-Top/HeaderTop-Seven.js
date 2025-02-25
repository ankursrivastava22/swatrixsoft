
import { useAppContext } from "@/context/Context";
import HeaderLanguage from "./Header-Language";

const HeaderTopSeven = ({ gapSpaceBetween, bgColor, flexDirection }) => {
  const { toggle, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`rbt-header-top rbt-header-top-1 variation-height-60 ${gapSpaceBetween} ${bgColor} top-expended-activation ${
          !toggle ? "d-none" : ""
        }`}
      >
        <div className="container">
          <div className="top-expended-wrapper">
            <div
              className={`top-expended-inner rbt-header-sec align-items-center ${flexDirection}`}
            >
              <div className="rbt-header-sec-col rbt-header-left">
                <div className="rbt-header-content">
                  <div className="header-info d-none d-lg-block">
                    <ul className="rbt-information-list">
                      <li>
                        <a href="#">
                          <i className="feather-help-circle"></i>Have any
                          Question?
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hello@example.com">
                          <i className="feather-mail"></i>example@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="feather-phone"></i>+1-202-555-0174
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                <div className="rbt-header-content justify-content-start justify-content-lg-end">
                  <HeaderLanguage />
                </div>
              </div>
            </div>
            <div className="header-info">
              <div className="top-bar-expended d-block d-lg-none">
                <button
                  className="topbar-expend-button rbt-round-btn"
                  onClick={() => setToggle(!toggle)}
                >
                  <i className="color-body feather-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopSeven;
