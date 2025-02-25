"use client";

import dynamic from "next/dynamic";

import CounterData from "../../data/elements/counter.json";
import useFetch from "@/context/useFetch";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

const CounterFive = () => {
  const { values } = useFetch(CounterData, "counterFive");

  return (
    <div className="container">
      {CounterData &&
        CounterData.counterFive.map((data, index) => (
          <div className="row g-5" key={index}>
            {data.body.map((item, innerIndex) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 single-counter"
                key={innerIndex}
              >
                <div className="rbt-counterup style-2">
                  <div className="inner">
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
                      <span className="subtitle">{data.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CounterFive;
