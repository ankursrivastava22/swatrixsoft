import Image from "next/image";
import Link from "next/link";

import TabData from "../../data/elements/advanceTab.json";
import SectionHead from "./SectionHead";

const AdvanceTabFour = ({ head }) => {
  return (
    <>
      {TabData &&
        TabData.advanceFour.map((data, index) => (
          <div className="container" key={index}>
            {head === undefined ? (
              <SectionHead tag={data.tag} title={data.title} />
            ) : (
              ""
            )}
            <div className="row g-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="advance-tab-button">
                  <ul
                    className="nav nav-tabs tab-button-style-2"
                    id="myTab-4"
                    role="tablist"
                  >
                    {data.body.map((item, innerIndex) => (
                      <li role="presentation" key={innerIndex}>
                        <Link
                          href="#"
                          className={`tab-button ${
                            item.isActive ? "active" : ""
                          }`}
                          id={item.tab}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.target}`}
                          role="tab"
                          aria-controls={item.target}
                          aria-selected={item.isActive}
                        >
                          <span className="title">{item.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <div className="tab-content advance-tab-content-style-2">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className={`tab-pane fade ${
                        item.isActive ? "active show" : ""
                      }`}
                      id={item.target}
                      role="tabpanel"
                      aria-labelledby={item.tab}
                      key={innerIndex}
                    >
                      <div className="content">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {data.gallery.map((value, subIndex) => (
              <div className="row g-5 mt--40" key={subIndex}>
                <div className="col-lg-6">
                  <div className="rbt-category-gallery">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          src={value.img}
                          width={value.width}
                          height={value.height}
                          alt="Gallery Images"
                        />
                      </Link>
                      <div className="rbt-bg-overlay"></div>
                      <div className="hover-content">
                        <h3 className="title">{value.text}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row g-5">
                    {value.subGallery.map((subValue, subInnerIndex) => (
                      <div
                        className={`${
                          subValue.lgImg
                            ? "col-lg-12"
                            : "col-lg-6 col-md-6 col-sm-6 col-12"
                        }`}
                        key={subInnerIndex}
                      >
                        <div className="rbt-category-gallery">
                          <div className="thumbnail">
                            <Link href="#">
                              <Image
                                src={subValue.img}
                                width={subValue.width}
                                height={subValue.height}
                                alt="Gallery Images"
                              />
                            </Link>
                            <div className="rbt-bg-overlay"></div>
                            <div className="hover-content">
                              <h3 className="title">{subValue.text}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default AdvanceTabFour;
