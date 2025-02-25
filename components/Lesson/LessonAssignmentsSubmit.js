import React from "react";

const LessonAssignmentsSubmit = () => {
  return (
    <>
      <div className="section-title">
        <h4>The Complete JavaScript Course 2023: From Zero to Expert!.</h4>
        <div className="bg-color-white rbt-shadow-box">
          <h5 className="rbt-title-style-3">Assignment Submission</h5>

          <form action="#">
            <div className="assinment-answer-form">
              <textarea
                rows="6"
                placeholder="Add your assignment content here."
              ></textarea>
            </div>

            <label
              htmlFor="images"
              className="drop-container rbt-custom-file-upload mt--30"
            >
              <span className="mb--0 h5">Drop files here</span>
              or
              <input type="file" id="images" accept="image/*" required />
            </label>
          </form>

          <div className="submit-btn mt--35">
            <a
              className="rbt-btn btn-gradient hover-icon-reverse"
              href="lesson-assignments-submit.html"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Submit Assignment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonAssignmentsSubmit;
