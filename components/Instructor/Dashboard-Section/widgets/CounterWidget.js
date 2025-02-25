"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import "odometer/themes/odometer-theme-default.css";
import Image from "next/image";

let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});
const CounterWidget = ({
  counterStyle = "one",
  icon,
  title,
  subtitle,
  value,
  styleClass,
  iconClass,
  numberClass,
}) => {
  const [odometerLoaded, setOdometerLoaded] = useState(loaded);
  const [odometerValue, setOdometerValue] = useState(0);

  loadedCallback = () => {
    setOdometerLoaded(true);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (odometerLoaded) {
      setOdometerValue(1);
    }
  }, [odometerLoaded]);

  useEffect(() => {
    if (inView) setOdometerValue(value);
  }, [inView, value]);

  return (
    <>
      {counterStyle === "one" && (
        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
          <div className="top-circle-shape" />
          <div ref={ref} className="inner">
            {icon && (
              <div className="rbt-round-icon">
                <Image width={512} height={512} src={icon} alt="Icons Images" />
              </div>
            )}
            <div className="content">
              <h3 className="counter">
                <Odometer format="d" duration={1000} value={numberClass} />
              </h3>
              <span className="subtitle">{title}</span>
            </div>
          </div>
        </div>
      )}

      {counterStyle === "two" && (
        <div
          ref={ref}
          className={`rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed ${styleClass}`}
        >
          <div className="inner">
            <div className={`rbt-round-icon ${iconClass}`}>
              <i className={icon} />
            </div>
            <div className="content">
              <h3 className={`counter without-icon ${numberClass}`}>
                <Odometer format="d" duration={1000} value={odometerValue} />
              </h3>
              <span className="rbt-title-style-2 d-block">{title}</span>
            </div>
          </div>
        </div>
      )}

      {counterStyle === "three" && (
        <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
          <div ref={ref} className="inner">
            <div className="content">
              <h3 className="counter color-white">
                <Odometer format="d" duration={1000} value={odometerValue} />
              </h3>
              <h5 className="title color-white">{title}</h5>
              <span className="subtitle color-white">{subtitle}</span>
            </div>
          </div>
        </div>
      )}

      {counterStyle === "four" && (
        <div ref={ref} className="rbt-counterup style-2">
          <div className="inner">
            <div className="content">
              <h3 className="counter">
                <Odometer format="d" duration={1000} value={odometerValue} />
              </h3>
              <span className="subtitle">{title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterWidget;
