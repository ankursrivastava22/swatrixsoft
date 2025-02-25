"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import Link from "next/link";

const LessonAssignmentPage = () => {
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
                <div className="section-title">
                  <h4>
                    The Complete JavaScript Course 2023: From Zero to Expert!.
                  </h4>
                  <div className="bg-color-white rbt-shadow-box">
                    <h5 className="rbt-title-style-3">Your Assignment</h5>
                    <p>Content Here</p>
                    <div className="submit-btn">
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="/lesson-assignments-submit"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <LessonPagination
              urlPrev="/lesson-quiz"
              urlNext="/lesson-assignments-submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonAssignmentPage;
