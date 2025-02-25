import Image from "next/image";
import Link from "next/link";

import HeaderTopData from "../../../data/headerTop";

const HeaderTop = () => {
  return (
    <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1 d-none d-lg-block">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {HeaderTopData &&
                HeaderTopData.headerTopOne.map((item, index) => (
                  <div className="inner justify-content-center" key={index}>
                    <div className="content">
                      <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                        {item.limit}
                      </span>
                      <span className="news-text color-white-off">
                        <Image
                          src={item.img}
                          width={22}
                          height={22}
                          alt="Hand Emojji Images"
                        />
                        {item.introPrice}
                      </span>
                    </div>
                    <div className="right-button">
                      <Link
                        className="rbt-btn-link color-white text-decoration-none"
                        href="https://themeforest.net/checkout/from_item/42846507?license=regular"
                      >
                        <span>
                          Purchase Now
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close position-right">
        <button className="rbt-round-btn btn-white-off bgsection-activation">
          <i className="feather-x"></i>
        </button>
      </div>
    </div>
  );
};
export default HeaderTop;
