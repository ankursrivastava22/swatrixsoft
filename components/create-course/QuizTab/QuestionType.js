import React from "react";

const QuestionType = ({ handleBackClick, title, type }) => {
  return (
    <>
      <div
        className="d-flex justify-content-between rbt-course-wrape mb-4"
        style={{ cursor: "auto" }}
      >
        <div className="inner d-flex align-items-center gap-2">
          <h6 className="rbt-title mb-0">{title}</h6>
        </div>
        <div className="inner">
          <ul className="rbt-list-style-1 rbt-course-list d-flex gap-3 align-items-center">
            <li>
              <span>{type}</span>
            </li>
            <li>
              <button
                type="button"
                className="btn quiz-modal__edit-btn dropdown-toggle me-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="feather-edit"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    type="button"
                    onClick={handleBackClick}
                  >
                    <i className="feather-edit-2"></i> Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item delete-item" href="#">
                    <i className="feather-trash"></i> Delete
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default QuestionType;
