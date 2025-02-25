import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceEight = ({ isHead }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceEight.map((data, index) => (
          <div className="container" key={index}>
            {isHead ? (
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
            <div className="row g-5">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-lg-2 col-xl-2 col-xxl-2 col-md-3 col-sm-4 col-6"
                  key={innerIndex}
                >
                  <div className="service-card service-card-5 variation-2">
                    <div className="inner">
                      <div className="icon">
                        <Link href="#">
                          <Image
                            src={item.img}
                            width={550}
                            height={300}
                            alt="Shape Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="#">{item.title}</Link>
                        </h6>
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

export default ServiceEight;
