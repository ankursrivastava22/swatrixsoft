"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";

const LessonIntroPage = () => {
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
                  <h4>Introduction to Our Histudy</h4>
                  <p>
                    Welcome to our online course for beginners JavaScript! This
                    course is designed to give you a solid foundation in the
                    basics of JavaScript programming. Whether you&apos;re
                    looking to pursue a career in web development, or just
                    interested in learning a valuable new skill, this course is
                    the perfect place to start.
                  </p>

                  <p>
                    Throughout this course, you&apos;ll learn the fundamental
                    concepts of programming such as variables, data types,
                    functions, and control structures. You&apos;ll also learn
                    how to use these concepts to create simple programs and web
                    applications.
                  </p>

                  <p>
                    Our course is structured in a way that makes learning easy
                    and fun. We use a combination of video lectures, hands-on
                    exercises, and quizzes to help you reinforce your
                    understanding of the material. Additionally, we provide
                    detailed explanations and examples to help you overcome any
                    challenges you may encounter along the way.
                  </p>

                  <p>
                    By the end of this course, you&apos;ll be able to write
                    basic JavaScript code, understand the fundamental concepts
                    of programming, and be able to build simple web
                    applications. So let&apos;s get started and begin your
                    journey to becoming a proficient JavaScript programmer!
                  </p>
                </div>
              </div>
            </div>
            <LessonPagination urlPrev="/lesson" urlNext="/lesson-quiz" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonIntroPage;
