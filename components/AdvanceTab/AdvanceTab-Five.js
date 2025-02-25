import Image from "next/image";

import TabData from "../../data/elements/advanceTab.json";

const AdvanceTabFive = () => {
  return (
    <>
      {TabData &&
        TabData.advanceFive.map((data, index) => (
          <div className="container" key={index}>
            <div className="row mb--40">
              <div className="col-lg-12">
                <div
                  className="section-title text-center sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay="100"
                >
                  <span className="subtitle bg-secondary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                </div>
              </div>
            </div>

            <div className="row row row--30 align-items-center">
              <div className="col-lg-5">
                <Image
                  className="radius-small"
                  src={data.img}
                  width={509}
                  height={367}
                  alt="Corporate Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
                <div className="rbt-default-tab">
                  <ul className="nav nav-tabs tab-button" role="tablist">
                    {data.body.map((item, innerIndex) => (
                      <li
                        className="nav-item tabs__tab "
                        role="presentation"
                        key={innerIndex}
                      >
                        <button
                          className={`nav-link ${
                            item.isActive ? "active" : ""
                          }`}
                          id={item.tab}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.target}`}
                          type="button"
                          role="tab"
                          aria-controls={item.target}
                          aria-selected={item.isActive}
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="rainbow-tab-content tab-content">
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
                        <p>{item.desc}</p>

                        <p>{item.descTwo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AdvanceTabFive;
