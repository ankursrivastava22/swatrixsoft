"use client";

import Link from "next/link";
import React, { useState } from "react";

const LessonQuiz = () => {
  const [next, updateNext] = useState(false);
  return (
    <>
      <form id="quiz-form" className="quiz-form-wrapper">
        <div id="question-1" className={`question ${next ? "d-none" : ""}`}>
          <div className={`quize-top-meta`}>
            <div className="quize-top-left">
              <span>
                Questions No: <strong>1/5</strong>
              </span>
              <span>
                Attempts Allowed: <strong>1</strong>
              </span>
            </div>
            <div className="quize-top-right">
              <span>
                Time remaining: <strong>No Limit</strong>
              </span>
            </div>
          </div>
          <hr />
          <div className="rbt-single-quiz">
            <h4>1. What is the capital of France?</h4>
            <div className="row g-3 mt--10">
              <div className="col-lg-6">
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    id="rbt-checkbox-1"
                    name="rbt-checkbox-1"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="rbt-checkbox-1">Option One</label>
                </p>
              </div>
              <div className="col-lg-6">
                <p className="rbt-checkbox-wrapper">
                  <input
                    id="rbt-checkbox-2"
                    name="rbt-checkbox-2"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="rbt-checkbox-2">Option Two</label>
                </p>
              </div>
              <div className="col-lg-6">
                <p className="rbt-checkbox-wrapper">
                  <input
                    id="rbt-checkbox-3"
                    name="rbt-checkbox-3"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="rbt-checkbox-3">Option Three</label>
                </p>
              </div>
              <div className="col-lg-6">
                <p className="rbt-checkbox-wrapper">
                  <input
                    id="rbt-checkbox-4"
                    name="rbt-checkbox-4"
                    type="checkbox"
                    value="yes"
                  />
                  <label htmlFor="rbt-checkbox-4">Option Four</label>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="question-2" className={`question ${!next ? "d-none" : ""}`}>
          <div className="quize-top-meta">
            <div className="quize-top-left">
              <span>
                Questions No: <strong>2/5</strong>
              </span>
              <span>
                Attempts Allowed: <strong>2</strong>
              </span>
            </div>
            <div className="quize-top-right">
              <span>
                Time remaining: <strong>No Limit</strong>
              </span>
            </div>
          </div>
          <hr />
          <div className="rbt-single-quiz">
            <h4>2. What is the Javascript?</h4>
            <div className="row g-3 mt--10">
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
        </div>

        <div className="rbt-quiz-btn-wrapper mt--30">
          <button
            className="rbt-btn bg-primary-opacity btn-sm"
            id="prev-btn"
            type="button"
            disabled={!next}
            onClick={() => updateNext(!next)}
          >
            Previous
          </button>
          <button
            className={`rbt-btn bg-primary-opacity btn-sm ms-2 ${
              next ? "d-none" : ""
            }`}
            id="next-btn"
            type="button"
            onClick={() => updateNext(!next)}
          >
            Next
          </button>
          <Link
            className={`rbt-btn btn-gradient btn-sm ms-2 ${
              !next ? "d-none" : ""
            }`}
            href="/lesson-quiz-result"
            id="submit-btn"
          >
            Submit
          </Link>
        </div>
      </form>
    </>
  );
};

export default LessonQuiz;
