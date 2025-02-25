"use client";

import React, { useState } from "react";

const SingleQuestion = () => {
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
      <form id="quiz-form" className="quiz-form-wrapper">
        <div className="rbt-single-quiz">
          <h4>1. What are the key features of Next.js ?</h4>
          <div className="row g-3">
            <div className="col-lg-12">
              <div className="rbt-form-chec">
                <div className="form-group mb--10">
                  <textarea
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Write Answer"
                  ></textarea>
                  <span className="focus-border"></span>
                </div>
                <span className="chr">
                  Character Remaining: {maxChars - inputValue.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SingleQuestion;
