"use client";

import React, { useState } from "react";

const FillBlanks = ({ num, point, pointNum }) => {
  const [inputValue, setInputValue] = useState("");
  const maxChars = 500;

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxChars) {
      setInputValue(value);
    }
  };
  return (
    <>
      <div className="rbt-single-quiz">
        <h4>
          {num === undefined ? "5" : num}. What are the key features of Next.js
          ?
        </h4>
        {point ? (
          <div className="mb--10">
            <span>
              Mark: <strong> {pointNum}</strong>
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="row g-3">
          <div className="col-lg-12">
            <div className="rbt-form-chec">
              <div className="form-group mb--10">
                <textarea
                  placeholder="Write Answer"
                  value={inputValue}
                  onChange={handleInputChange}
                ></textarea>
                <span className="focus-border"></span>
              </div>{" "}
              <span className="chr">
                Character Remaining: {maxChars - inputValue.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FillBlanks;
