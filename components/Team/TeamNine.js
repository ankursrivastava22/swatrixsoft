import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead";

const TeamNine = () => {
  return (
    <>
      <div className="container">
        <TeamHead
          title="Team (Carousel Style)."
          desc="Awesome Carousel Style."
        />

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              className="swiper team-slide-activation-2 rbt-dot-bottom-center ptb--50"
              modules={[Pagination]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                el: ".rbt-swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {TeamData &&
                TeamData.team.slice(0, 7).map((data, index) => (
                  <SwiperSlide className="swiper-wrapper mb-0" key={index}>
                    {data.details.map((item, innerIndex) => (
                      <div className="swiper-slide" key={innerIndex}>
                        <div className="rbt-team team-style-default style-three rbt-hover">
                          <div className="inner">
                            <div className="thumbnail">
                              <Image
                                src={item.img}
                                width={415}
                                height={555}
                                priority
                                alt="Corporate Template"
                              />
                            </div>
                            <div className="content">
                              <h2 className="title">{item.name}</h2>
                              <h6 className="subtitle theme-gradient">
                                {item.type}
                              </h6>
                              <span className="team-form">
                                <i className="feather-map-pin"></i>
                                <span className="location">
                                  {item.location}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
              <div
                className="rbt-swiper-pagination"
                style={{ bottom: "0" }}
              ></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamNine;
