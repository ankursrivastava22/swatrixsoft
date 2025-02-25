import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const Service = ({ head }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceOne.map((data, index) => (
          <div className="container" key={index}>
            {head === undefined ? (
              <div className="row mb--60">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h2 className="title">{data.sectionTitle}</h2>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="row row--15 mt_dec--30">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="rbt-flipbox">
                    <div
                      className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                        item.bgOne
                          ? "card-bg-1"
                          : "" || item.bgTwo
                          ? "card-bg-2"
                          : "" || item.bgThree
                          ? "card-bg-3"
                          : "" || item.bgFour
                          ? "card-bg-4"
                          : ""
                      }`}
                    >
                      <div className="rbt-flipbox-front rbt-flipbox-face inner">
                        <div className="icon">
                          <Image
                            src={item.img}
                            width={55}
                            height={55}
                            alt="card-icon"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <Link href="#">{item.title}</Link>
                          </h5>
                          <p>{item.desc}</p>
                          <Link
                            className="rbt-btn-link stretched-link"
                            href="#"
                          >
                            Learn More<i className="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      <div className="rbt-flipbox-back rbt-flipbox-face inner">
                        <p>{item.desc}</p>
                        <Link
                          className="rbt-btn rbt-switch-btn btn-white btn-sm"
                          href="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Service;
