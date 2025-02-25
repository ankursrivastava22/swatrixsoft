"use client";

import React, { useState, useEffect } from "react";

const CountDown = ({ targetDate, targetTime }) => {
  const [remaining, setRemaining] = useState({
    days: 0,
    hour: 0,
    mins: 0,
    sec: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  let timer;
  let distance;

  const setDate = () => {
    const now = new Date().getTime();
    const countDownDate = new Date(targetDate + " " + targetTime).getTime();

    distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      setIsExpired(true);
    } else {
      setRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((distance % (1000 * 60)) / 1000),
      });
      setIsExpired(false);
    }
  };

  const counter = () => {
    timer = setInterval(() => {
      setDate();
    }, 1000);
  };

  useEffect(() => {
    setDate();
    counter();
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {!isExpired && targetDate && targetTime ? (
        <>
          {Object.entries(remaining).map((el, i) => (
            <div key={i} className="countdown-container">
              <span key={el[1]} className="countdown-value">
                {el[1]}
              </span>
              <span className="countdown-heading">{el[0]}</span>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="countdown-container days">
            <span className="countdown-value">0</span>
            <span className="countdown-heading">Days</span>
          </div>
          <div className="countdown-container hours">
            <span className="countdown-value">0</span>
            <span className="countdown-heading">Hours</span>
          </div>
          <div className="countdown-container minutes">
            <span className="countdown-value">0</span>
            <span className="countdown-heading">Minutes</span>
          </div>
          <div className="countdown-container seconds">
            <span className="countdown-value">0</span>
            <span className="countdown-heading">Sec</span>
          </div>
        </>
      )}
    </>
  );
};

export default CountDown;
