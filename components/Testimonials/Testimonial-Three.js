import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import TestimonialData from "../../data/elements/testimonial.json";

const TestimonialThree = ({ bgClass, designation, isStar,subTitleBg }) => {
  return (
    <>
      {TestimonialData &&
        TestimonialData.testimonialThree.map((data, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-12 mb--60">
                <div className="section-title text-center">
                  <span className={`subtitle ${subTitleBg}`}>
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="rbt-accordion-style rbt-accordion-01  accordion">
                  <div className="accordion" id="accordionExamplea1">
                    {data.accordion.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={item.heading}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.collapse}
                          >
                            {item.btnText}
                          </button>
                        </h2>
                        <div
                          id={item.collapse}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent="#accordionExamplea1"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <Swiper
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: ".rbt-swiper-pagination",
                    clickable: true,
                  }}
                  className="swiper testimonial-activation-1 rbt-dot-bottom-left pb--60"
                >
                  {data.body.map((item, innerIndex) => (
                    <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                      <div className="swiper-slide">
                        <div
                          className={`rbt-testimonial-box no-box-shadow ${bgClass}`}
                        >
                          <div className="inner">
                            <div className="clint-info-wrapper">
                              <div className="thumb">
                                <Image
                                  src={item.img}
                                  width={494}
                                  height={494}
                                  alt="Clint Images"
                                />
                              </div>
                              <div className="client-info">
                                <h5 className="title">{item.title}</h5>
                                <span className={`${designation}`}>
                                  {item.position} <i>{item.company}</i>
                                </span>
                              </div>
                            </div>
                            <div className="description">
                              <p className="subtitle-3">{item.desc}</p>
                              {isStar ? (
                                <div className="rating mt--20">
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                </div>
                              ) : (
                                <Link className="rbt-btn-link" href="#">
                                  Read Project Case Study
                                  <i className="feather-arrow-right"></i>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="rbt-swiper-pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TestimonialThree;
