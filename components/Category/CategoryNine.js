import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";

const CategoryNine = () => {
  const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);

  return (
    <>
      <Swiper
        className="swiper category-activation-two rbt-arrow-between md-size gutter-swiper-10 ptb--20"
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
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {CourseDetails &&
          CourseDetails.courseDetails.slice(0, 8).map((item, innerIndex) => {
            const count = categoryCounts[item.category] || 0;
            return (
              <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <Link
                      className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible"
                      href={`/course-filter-one-toggle/${item.category}`}
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <Image
                            src={item.cateBigImg}
                            width={300}
                            height={300}
                            priority
                            alt="Icons Images"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">{item.category}</h5>
                          <div className="read-more-btn">
                            <span className="rbt-btn-link">
                              {count} Course{count !== 1 ? "s" : ""}
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

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

export default CategoryNine;
