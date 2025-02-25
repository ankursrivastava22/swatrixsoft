import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceTen = ({ head }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceTen.map((data, index) => (
          <div className="container" key={index}>
            {head ? (
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
                  className="col-xl-6 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="rbt-service rbt-service-2 variation-2 rbt-hover-02">
                    <div className="inner">
                      <div className="content">
                        <h4 className="title">
                          <Link href="#">{item.title}</Link>
                        </h4>
                        <p>{item.desc}</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="rbt-list-style-3">
                              {item.listLeft.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <i className={subItem.icon}></i>
                                  {subItem.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="rbt-list-style-3">
                              {item.listRight.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <i className={subItem.icon}></i>
                                  {subItem.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <Link
                          className="rbt-btn btn-gradient hover-icon-reverse btn-sm mt--30"
                          href="#"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Read More</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={300}
                          height={400}
                          alt="Education Images"
                        />
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

export default ServiceTen;
