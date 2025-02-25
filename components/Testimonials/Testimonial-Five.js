import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialData from "../../data/elements/testimonial.json";

const TestimonialFive = ({ isDesc }) => {
  return (
    <>
      {TestimonialData &&
        TestimonialData.testimonialThree.map((data, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-12 mb--60">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  {isDesc ? (
                    <p className="description mt--20">{data.desc}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {TestimonialData.testimonialTwo.map((parent, parentIndex) => (
              <Swiper
                className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30"
                slidesPerView={1}
                key={parentIndex}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".rbt-arrow-left",
                  prevEl: ".rbt-arrow-right",
                }}
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                  },

                  768: {
                    slidesPerView: 2,
                  },

                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {parent.left.map((data, index) => (
                  <SwiperSlide className="swiper-wrapper" key={index}>
                    <div className="swiper-slide">
                      <div className="single-slide">
                        <div className="rbt-testimonial-box">
                          <div className="inner bg-no-shadow bg-color-primary-opacity">
                            <div className="clint-info-wrapper">
                              <div className="thumb">
                                <Image
                                  src={data.img}
                                  width={494}
                                  height={494}
                                  alt="Clint Images"
                                />
                              </div>
                              <div className="client-info">
                                <h5 className="title">{data.title}</h5>
                                <span>
                                  {data.position} <i>{data.company}</i>
                                </span>
                              </div>
                            </div>
                            <div className="description">
                              <p className="subtitle-3">{data.desc}</p>
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
            ))}
          </div>
        ))}
    </>
  );
};

export default TestimonialFive;
