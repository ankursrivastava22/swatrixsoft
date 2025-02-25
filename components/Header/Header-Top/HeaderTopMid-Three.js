import Link from "next/link";

import User from "../Offcanvas/User";
import HeaderLanguage from "./Header-Language";
import { useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";

const HeaderTopMidThree = ({ flexDirection }) => {
  const { cartToggle, setCart } = useAppContext();
  const { total_items } = useSelector((state) => state.CartReducer);
  return (
    <>
      <div className="container">
        <div className={`rbt-header-sec align-items-center ${flexDirection}`}>
          <div className="rbt-header-sec-col rbt-header-left">
            <div className="rbt-header-content">
              <HeaderLanguage />
            </div>
          </div>

          <div className="rbt-header-sec-col rbt-header-center d-none d-md-block">
            <div className="rbt-header-content">
              <div className="header-info">
                <div className="rbt-search-field">
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

          <div className="rbt-header-sec-col rbt-header-right">
            <div className="rbt-header-content">
              <div className="header-info">
                <ul className="quick-access">
                  <li onClick={() => setCart(!cartToggle)}>
                    <Link
                      className="d-none d-xl-block rbt-cart-sidenav-activation"
                      href="#"
                    >
                      <i className="feather-shopping-cart"></i>Cart
                    </Link>
                    <Link
                      className="d-block d-xl-none rbt-cart-sidenav-activation"
                      href="#"
                    >
                      <i className="feather-shopping-cart"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="header-info">
                <ul className="quick-access">
                  <li className="account-access rbt-user-wrapper right-align-dropdown d-none d-xl-block">
                    <Link href="#">
                      <i className="feather-user"></i>Admin
                    </Link>
                    <User />
                  </li>

                  <li className="access-icon rbt-user-wrapper right-align-dropdown d-block d-xl-none">
                    <Link className="rbt-round-btn" href="#">
                      <i className="feather-user"></i>
                    </Link>
                    <User />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopMidThree;
