import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceTwo = () => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceTwo.map((data, index) => (
          <div className="container" key={index}>
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="title">{data.sectionTitle}</h2>
                </div>
              </div>
            </div>
            <div className="row row--15 mt_dec--30">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-xl-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="rbt-service rbt-service-2 rbt-hover-02">
                    <div className="inner">
                      <div className="content">
                        <h4 className="title">
                          <Link href="#">{item.title}</Link>
                        </h4>
                        <p>{item.desc}</p>
                        <Link className="transparent-button" href="#">
                          Learn More
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={177}
                          height={237}
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

export default ServiceTwo;
