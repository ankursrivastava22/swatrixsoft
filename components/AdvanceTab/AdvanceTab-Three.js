import Image from "next/image";
import Link from "next/link";

import TabData from "../../data/elements/advanceTab.json";
import SectionHead from "./SectionHead";

const AdvanceTabThree = () => {
  return (
    <>
      {TabData &&
        TabData.advanceThree.map((data, index) => (
          <div className="container" key={index}>
            <SectionHead tag={data.tag} title={data.title} />
            <div className="row g-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="tab-content">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className={`tab-pane fade advance-tab-content-1 right-top ${
                        item.isActive ? "active show" : ""
                      }`}
                      id={item.target}
                      role="tabpanel"
                      aria-labelledby={item.tab}
                      key={innerIndex}
                    >
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={1083}
                          height={779}
                          priority={true}
                          alt="advance-tab-image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1 mt--40">
                <div className="advance-tab-button advance-tab-button-1 right-top">
                  <ul
                    className="nav nav-tabs tab-button-list"
                    id="myTab-3"
                    role="tablist"
                  >
                    {data.body.map((item, innerIndex) => (
                      <li
                        className="col-lg-4 nav-item"
                        role="presentation"
                        key={innerIndex}
                      >
                        <Link
                          href="#"
                          className={`nav-link tab-button ${
                            item.isActive ? "active" : ""
                          }`}
                          id={item.tab}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.target}`}
                          role="tab"
                          aria-controls={item.target}
                          aria-selected={item.isActive}
                        >
                          <div className="tab">
                            <h4 className="title">{item.text}</h4>
                            <p className="description">{item.desc}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AdvanceTabThree;
