import React from "react";

const Summary = ({ point, pointNum }) => {
  return (
    <>
      <div className="rbt-single-quiz">
        <h4>4. Fill in the Blanks</h4>
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
            <div className="rbt-form-chec" style={{ lineHeight: "55px" }}>
              <span className="form-check-label">Next.js is a popular</span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label">framework </span>
              <span className="form-check-label">built on top of </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label">
                .It enables developers to create
              </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label">
                applications with features such as
              </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label"> rendering and </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label"> generation. </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
