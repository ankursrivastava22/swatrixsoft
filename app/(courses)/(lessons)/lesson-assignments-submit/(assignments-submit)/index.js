"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonTop from "@/components/Lesson/LessonTop";
import LessonAssignmentsSubmit from "@/components/Lesson/LessonAssignmentsSubmit";

const AssignmentsSubmitPage = () => {
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
                <LessonAssignmentsSubmit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentsSubmitPage;
