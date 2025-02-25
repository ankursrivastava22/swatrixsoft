"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import SingleQuestion from "@/components/Lesson/SingleQuestion";
import Link from "next/link";

const SingleQuestionLayout = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div
            className={`rbt-lesson-leftsidebar ${
              sidebar ? "" : "sibebar-none"
            }`}
          >
            <LessonSidebar />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden">
            <LessonTop
              sidebar={sidebar}
              setSidebar={() => setSidebar(!sidebar)}
            />

            <div className="inner">
              <div className="content">
                <div className="quize-top-meta">
                  <div className="quize-top-left">
                    <span>
                      Questions No:
                      <strong>1/10</strong>
                    </span>
                    <span>
                      Attempts Allowed: <strong>1/20</strong>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30 overflow-hidden">
                  <SingleQuestion />
                </div>
                <div className="submit-btn mt--40">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/quiz-with-point"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Submit & Next</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <LessonPagination
              urlPrev="/pagination-quiz"
              urlNext="/quiz-with-point"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuestionLayout;
