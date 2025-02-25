"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import CounterData from "../../data/elements/counter.json";
import useFetch from "@/context/useFetch";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

const CounterFour = () => {
  const { values } = useFetch(CounterData, "counterFour");
  return (
    <>
      {CounterData &&
        CounterData.counterFour.map((data, index) => (
          <div className="container" key={index}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="inner pl--50 pl_sm--0 pl_md--0">
                  <div className="section-title text-start">
                    <span className="subtitle bg-pink-opacity">{data.tag}</span>
                    <h2 className="title">
                      {data.title} <br /> {data.subTitle}
                    </h2>
                    <p className="description has-medium-font-size mt--20 mb--0">
                      {data.desc}
                    </p>
                  </div>
                  <div className="read-more-btn mt--40">
                    <Link className="rbt-btn hover-icon-reverse" href="#">
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">More About Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-5">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12"
                      key={innerIndex}
                    >
                      <div className="rbt-counterup style-2">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter">
                              <span className="odometer">
                                <Odometer
                                  value={
                                    values[
                                      index * data.body.length + innerIndex
                                    ]
                                  }
                                />
                              </span>
                            </h3>
                            <span className="subtitle">{item.text}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CounterFour;
