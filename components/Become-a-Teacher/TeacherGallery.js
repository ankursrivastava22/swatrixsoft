import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import Teacher from "../../data/pages/become-A-Teacher.json";

const TeacherGallery = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {Teacher &&
            Teacher.becomeATeacher.map((data, index) => (
              <div className="col-lg-12" key={index}>
                <Swiper
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                  }}
                  slidesPerView={1}
                  className="swiper rbt-gif-banner-area rbt-arrow-between"
                >
                  {data.gallery.map((item, innerIndex) => (
                    <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                      <div className="swiper-slide">
                        <div className="thumbnail">
                          <Link href="#">
                            <Image
                              className="rbt-radius w-100"
                              src={item.img}
                              width={item.width}
                              height={item.height}
                              priority
                              alt="Banner Images"
                            />
                          </Link>
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
        </div>
      </div>
    </>
  );
};

export default TeacherGallery;
