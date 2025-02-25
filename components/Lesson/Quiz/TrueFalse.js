import React from "react";

const TrueFalse = ({ point, pointNum }) => {
  return (
    <>
      <div className="rbt-single-quiz">
        <h4>3. NextJs is a Framework?</h4>{" "}
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
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-single-select"
                id="rbt-single-select-10"
              />
              <label
                className="form-check-label"
                htmlFor="rbt-single-select-10"
              >
                True
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-single-select"
                id="rbt-single-select-20"
              />
              <label
                className="form-check-label"
                htmlFor="rbt-single-select-20"
              >
                False
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrueFalse;
