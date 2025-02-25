import Link from "next/link";
import React from "react";

const LessonPagination = ({ urlPrev, urlNext }) => {
  return (
    <>
      <div className="bg-color-extra2 ptb--15 overflow-hidden">
        <div className="rbt-button-group">
          {urlPrev && (
            <Link
              className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
              href={urlPrev}
            >
              <span className="btn-icon">
                <i className="feather-arrow-left"></i>
              </span>
              <span className="btn-text">Previous</span>
            </Link>
          )}

          {urlNext && (
            <Link className="rbt-btn icon-hover btn-md" href={urlNext}>
              <span className="btn-text">Next</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default LessonPagination;
