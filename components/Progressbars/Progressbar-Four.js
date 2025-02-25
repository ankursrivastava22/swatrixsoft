"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React, { useState, useEffect } from "react";

const ProgressbarFour = () => {
  const [percentage, setPercentages] = useState({
    percentage1: 0,
    percentage2: 0,
    percentage3: 0,
    percentage4: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages((prevPercentages) => {
        const updatedPercentages = { ...prevPercentages };

        if (updatedPercentages.percentage1 < 80) {
          updatedPercentages.percentage1 += 1;
        }
        if (updatedPercentages.percentage2 < 60) {
          updatedPercentages.percentage2 += 1;
        }
        if (updatedPercentages.percentage3 < 70) {
          updatedPercentages.percentage3 += 1;
        }
        if (updatedPercentages.percentage4 < 95) {
          updatedPercentages.percentage4 += 1;
        }

        return updatedPercentages;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const { percentage1, percentage2, percentage3, percentage4 } = percentage;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
              <div className="radial-progress-single">
                <div
                  className="m-auto"
                  style={{ width: "185px", height: "185px" }}
                >
                  <CircularProgressbar
                    className="circle-text count"
                    strokeWidth={5}
                    value={percentage1}
                    text={`${percentage1}%`}
                    styles={buildStyles({
                      textColor: "#6b7385",
                      pathColor: "#059DFF",
                      trailColor: "#F6F6F6",
                    })}
                  />
                </div>
                <div className="circle-info">
                  <h4 className="title">Design</h4>
                  <h6 className="subtitle">Presentation your skill</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
              <div className="radial-progress-single">
                <div
                  className="m-auto"
                  style={{ width: "185px", height: "185px" }}
                >
                  <CircularProgressbar
                    className="circle-text count"
                    strokeWidth={5}
                    value={percentage2}
                    text={`${percentage2}%`}
                    styles={buildStyles({
                      textColor: "#6b7385",
                      pathColor: "#059DFF",
                      trailColor: "#F6F6F6",
                    })}
                  />
                </div>

                <div className="circle-info">
                  <h4 className="title">Photoshop</h4>
                  <h6 className="subtitle">Presentation your skill</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
              <div className="radial-progress-single">
                <div
                  className="m-auto"
                  style={{ width: "185px", height: "185px" }}
                >
                  <CircularProgressbar
                    className="circle-text count"
                    strokeWidth={5}
                    value={percentage3}
                    text={`${percentage3}%`}
                    styles={buildStyles({
                      textColor: "#6b7385",
                      pathColor: "#059DFF",
                      trailColor: "#F6F6F6",
                    })}
                  />
                </div>
                <div className="circle-info">
                  <h4 className="title">Application</h4>
                  <h6 className="subtitle">Presentation your skill</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
              <div className="radial-progress-single">
                <div
                  className="m-auto"
                  style={{ width: "185px", height: "185px" }}
                >
                  <CircularProgressbar
                    className="circle-text count"
                    strokeWidth={5}
                    value={percentage4}
                    text={`${percentage4}%`}
                    styles={buildStyles({
                      textColor: "#6b7385",
                      pathColor: "#059DFF",
                      trailColor: "#F6F6F6",
                    })}
                  />
                </div>
                <div className="circle-info">
                  <h4 className="title">Development</h4>
                  <h6 className="subtitle">Presentation your skill</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressbarFour;
