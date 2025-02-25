import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import ServiceData from "../../data/elements/service.json";

const ServiceThree = ({ head }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceThree.map((data, index) => (
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
            <Swiper
              className="swiper service-item-3-activation  rbt-arrow-between gutter-swiper-30"
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: ".rbt-arrow-left",
                prevEl: ".rbt-arrow-right",
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                481: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.body.map((item, innerIndex) => (
                <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                  <div className="swiper-slide">
                    <div className="single-slide">
                      <div
                        className={`rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow ${
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
                  </div>
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-arrow rbt-arrow-left">
                <div className="custom-overfolow">
                  <i className="rbt-icon feather-arrow-left"></i>
                  <i className="rbt-icon-top feather-arrow-left"></i>
                </div>
              </div>

              <div className="rbt-swiper-arrow rbt-arrow-right">
                <div className="custom-overfolow">
                  <i className="rbt-icon feather-arrow-right"></i>
                  <i className="rbt-icon-top feather-arrow-right"></i>
                </div>
              </div>
            </Swiper>
          </div>
        ))}
    </>
  );
};

export default ServiceThree;
