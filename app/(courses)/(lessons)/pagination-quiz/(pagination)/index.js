"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import PaginationQuiz from "@/components/Lesson/PaginationQuiz";
import Link from "next/link";

const PaginationQuizLayout = () => {
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
                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30 overflow-hidden">
                  <PaginationQuiz />
                </div>
              </div>
            </div>

            <LessonPagination
              urlPrev="/all-questions"
              urlNext="/single-question"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginationQuizLayout;
