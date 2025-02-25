"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

import CounterHead from "./Counter-Head";
import CounterData from "../../data/elements/counter.json";
import useFetch from "@/context/useFetch";

const CounterThree = () => {
  const { values } = useFetch(CounterData, "counterThree");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      {CounterData &&
        CounterData.counterThree.map((data, index) => (
          <div className="container" key={index}>
            <CounterHead
              bgClass="bg-primary-opacity"
              mb="mb--60"
              tag={data.tag}
              title={data.title}
              subTitle={data.subTitle}
              desc={data.desc}
            />

            <div className="row g-5">
              {data.body.map((item, innerIndex) => (
                <div
                  className={`col-lg-3 col-md-6 col-sm-6 col-12 ${
                    item.mt ? "mt--60 mt_md--30" : ""
                  }`}
                  key={innerIndex}
                >
                  <div
                    className={`rbt-counterup rbt-hover-active ${
                      activeIndex === innerIndex ? "active" : ""
                    } rbt-hover-03`}
                    onMouseEnter={() => handleMouseEnter(innerIndex)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="inner">
                      <div
                        className={`rbt-round-icon ${
                          item.primary
                            ? "bg-primary-opacity"
                            : "" || item.secondary
                            ? "bg-secondary-opacity"
                            : "" || item.pink
                            ? "bg-pink-opacity"
                            : "" || item.violet
                            ? "bg-violet-opacity"
                            : ""
                        }`}
                      >
                        <i className={item.icon}></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">
                            <Odometer
                              value={
                                values[index * data.body.length + innerIndex]
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
        ))}
    </>
  );
};

export default CounterThree;
