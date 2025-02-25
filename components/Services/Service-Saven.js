import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceSaven = ({ head }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceSaven.map((data, index) => (
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
              <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-12 mt--30">
                <div className="section-title text-start">
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--20">{data.desc}</p>
                  <div className="read-more-btn">
                    <Link
                      className="rbt-btn btn-gradient radius rbt-marquee-btn marquee-text-y"
                      href="#"
                    >
                      <span data-text="About More Us">About More Us</span>
                    </Link>
                  </div>
                </div>
              </div>
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div
                    className={`service-card service-card-6 bg-color ${
                      item.bgOne
                        ? "bg-card-color-1"
                        : "" || item.bgTwo
                        ? "bg-card-color-2"
                        : "" || item.bgThree
                        ? "bg-card-color-3"
                        : "" || item.bgFour
                        ? "bg-card-color-4"
                        : "" || item.bgFive
                        ? "bg-card-color-5"
                        : ""
                    }`}
                  >
                    <div className="inner">
                      <div className="icon">
                        <Image
                          src={item.img}
                          width={60}
                          height={60}
                          alt="Shape Images"
                        />
                        <Image
                          className="opacity_image"
                          src={item.img}
                          width={60}
                          height={60}
                          alt="Shape Images"
                        />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="#">{data.title}</Link>
                        </h6>
                        <p className="description">{data.desc}</p>
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

export default ServiceSaven;
