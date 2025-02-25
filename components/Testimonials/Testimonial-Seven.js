import Image from "next/image";
import Link from "next/link";

import TestimonialData from "../../data/elements/testimonial.json";

const TestimonialSeven = () => {
  return (
    <>
      {TestimonialData &&
        TestimonialData.testimonialSeven.map((data, index) => (
          <div
            className="scroll-animation-wrapper no-overlay mt--50"
            key={index}
          >
            <div className="scroll-animation scroll-right-left">
              {data.left.map((item, innerIndex) => (
                <div
                  className="single-column-20 bg-theme-gradient-odd"
                  key={innerIndex}
                >
                  <div className="rbt-testimonial-box style-2">
                    <div className="inner">
                      <div className="icons">
                        <Image
                          src={item.img}
                          width={item.wtd ? item.wtd : 97}
                          height={item.ht ? item.ht : 50}
                          alt="Clint Images"
                        />
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <div className="clint-info-wrapper">
                          <div className="thumb">
                            <Image
                              src={item.client}
                              width={494}
                              height={494}
                              alt="Clint Images"
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="title">
                              {item.title} <i>{item.position}</i>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      {TestimonialData &&
        TestimonialData.testimonialSeven.map((data, index) => (
          <div
            className="scroll-animation-wrapper no-overlay mt--30"
            key={index}
          >
            <div className="scroll-animation scroll-left-right">
              {data.left.map((item, innerIndex) => (
                <div
                  className="single-column-20 bg-theme-gradient-even"
                  key={innerIndex}
                >
                  <div className="rbt-testimonial-box style-2">
                    <div className="inner">
                      <div className="icons">
                        <Image
                          src={item.img}
                          width={item.wtd ? item.wtd : 97}
                          height={item.ht ? item.ht : 50}
                          alt="Clint Images"
                        />
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <div className="clint-info-wrapper">
                          <div className="thumb">
                            <Image
                              src={item.client}
                              width={494}
                              height={494}
                              alt="Clint Images"
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="title">
                              {item.title} <i>{item.position}</i>
                            </h5>
                          </div>
                        </div>
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

export default TestimonialSeven;
