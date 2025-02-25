"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(3600);
  const [isTimeEnd, setIsTimeEnd] = useState(false);

  useEffect(() => {
    if (time <= 0) {
      setIsTimeEnd(true);
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time % 3600) / 60);
  const getSeconds = time % 60;

  return (
    <>
      {isTimeEnd ? (
        <span>Time remaining: 0h 0m 0s</span>
      ) : (
        <span>
          Time remaining:
          <strong className="ps-2">
            {getHours}h {getMinutes}m {getSeconds}s{" "}
          </strong>
        </span>
      )}
    </>
  );
};

export default CountdownTimer;
