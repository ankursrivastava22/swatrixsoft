import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import sliderImg1 from "../../public/images/course/single-course-07.jpg";
import sliderImg2 from "../../public/images/course/single-course-08.jpg";
import sliderImg3 from "../../public/images/course/single-course-09.jpg";

const CourseSlider = () => {
  return (
    <>
      <div className="rbt-image-gallery-wrapper">
        <Swiper
          className="swiper modern-course-carousel-activation rbt-arrow-between"
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".rbt-arrow-left",
            prevEl: ".rbt-arrow-right",
          }}
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="thumbnail mt--0">
                <Image src={sliderImg1} width={558} height={372} alt="Image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="thumbnail mt--0">
                <Image src={sliderImg2} width={558} height={372} alt="Image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="thumbnail mt--0">
                <Image src={sliderImg3} width={558} height={372} alt="Image" />
              </div>
            </div>
          </SwiperSlide>
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
    </>
  );
};

export default CourseSlider;
