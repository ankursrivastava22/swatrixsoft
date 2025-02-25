import React from "react";

const SingleSelect = ({ point, pointNum }) => {
  return (
    <>
      <div className="rbt-single-quiz">
        <h4>2. What is the Javascript?</h4>
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
                name="rbt-radio"
                id="rbt-radio-1"
              />
              <label className="form-check-label" htmlFor="rbt-radio-1">
                Option One
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-2"
              />
              <label className="form-check-label" htmlFor="rbt-radio-2">
                Option Two
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-3"
              />
              <label className="form-check-label" htmlFor="rbt-radio-3">
                Option Three
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-4"
              />
              <label className="form-check-label" htmlFor="rbt-radio-4">
                Option Four
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSelect;
