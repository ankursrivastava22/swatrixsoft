import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const UdemyAffiliateBanner = ({ CourseData }) => {
  return (
    <>
      <Swiper
        className="swiper udemy-affilite-activation rbt-arrow-between"
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: ".rbt-arrow-left",
          prevEl: ".rbt-arrow-right",
        }}
      >
        {CourseData &&
          CourseData.courseDetails.slice(8, 12).map((data, index) => (
            <SwiperSlide className="swiper-wrapper" key={index}>
              <div className="swiper-slide">
                <div className="row gy-5 row--30 align-items-center">
                  <div className="col-lg-6">
                    <div className="course-thumbnail">
                      <Link href={`/course-details/${data.id}`}>
                        <Image
                          className="radius-6"
                          src={data.courseImg}
                          width={623}
                          height={398}
                          priority
                          alt="Course Images"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <div className="inner text-start">
                        <div className="section-title">
                          <span className="subtitle bg-secondary-opacity">
                            Enjoy Learning!
                          </span>
                        </div>

                        <div className="rbt-course-meta-wrapper d-flex align-items-center">
                          <div className="rbt-author-meta">
                            <div className="rbt-avater">
                              <Link href={`/profile/${data.id}`}>
                                <Image
                                  src={data.userImg}
                                  width={33}
                                  height={33}
                                  priority
                                  alt="Sophia Jaymes"
                                />
                              </Link>
                            </div>
                            <div className="rbt-author-info">
                              By
                              <Link href={`/profile/${data.id}`}>
                                {data.userName}
                              </Link>
                              In <Link href="#">{data.userCategory}</Link>
                            </div>
                          </div>

                          <div className="feature-sin rating">
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
                            <Link className="rbt-title-style-2" href="#">
                              (4.8)
                            </Link>
                          </div>
                        </div>

                        <h2 className="banner-title">
                          Learn {data.language} in
                          <span className="theme-gradient">
                            {data.lesson} weeks
                          </span>
                          with spoken.
                        </h2>

                        <p className="description has-medium-font-size mt--20">
                          {data.desc}
                        </p>

                        <div className="slider-btn rbt-button-group justify-content-start">
                          <Link
                            className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                            href="#"
                          >
                            <span data-text="ENROLL NOW">ENROLL NOW</span>
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
    </>
  );
};

export default UdemyAffiliateBanner;
