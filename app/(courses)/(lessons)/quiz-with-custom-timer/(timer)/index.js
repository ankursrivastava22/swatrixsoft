"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import CountdownTimer from "@/components/Lesson/Timer";
import QuestionAll from "@/components/Lesson/QuestionAll";

const QuizWithTimeLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const [details, setDetails] = useState(false);

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

            <div className="inner py-0">
              <div className="content">
                <div className="quize-top-meta mb-0">
                  <div className="quize-top-left section-title">
                    <p className="mb--10">Quiz</p>
                    <h5>Quiz with custom timer</h5>
                  </div>
                  {details ? (
                    <div className="quize-top-right">
                      <CountdownTimer />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                {details ? (
                  <QuestionAll details={details} setDetails={setDetails} />
                ) : (
                  ""
                )}
                {details ? (
                  <div className="submit-btn mt--30">
                    <Link
                      href="#"
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      onClick={() => setDetails(!details)}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Start Quiz</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="rbt-lesson-area bg-color-white">
                    <div className="rbt-lesson-content-wrapper">
                      <div className="inner py-0">
                        <div className="section-title">
                          <p>
                            At Histudy, we offer a variety of
                            <strong> 8 interactive quiz types </strong>
                            designed to enhance the learning experience. Our
                            quizzes are an excellent tool for assessing
                            students&apos; knowledge, making education both
                            engaging and effective. With Histudy, learning is
                            not just informative but also enjoyable.
                          </p>

                          <ul className="rbt-list-style-1 mb--20">
                            <li>1. True/False</li>
                            <li>2. Single Choice </li>
                            <li>3. Multiple Choice </li>
                            <li>4. Open Ended</li>
                            <li>5. Fill in the Blanks</li>
                            <li>6. Sort Answer</li>
                            <li>7. Matching</li>
                            <li>8. Image Matching</li>
                          </ul>
                          <p>
                            Short Answer, Matching ,Image Matching, Image
                            Answering, Ordering, Detailed Quiz Report for
                            Student are pro features.
                          </p>
                          <p>
                            Note: Contact our support center or let us know if
                            you need the discount code.
                          </p>
                          <ul className="rbt-list-style-1">
                            <li>
                              <span>
                                Quiz Time: <strong> Minutes </strong>
                              </span>
                            </li>
                            <li>
                              <span>
                                Total Attempted: <strong> 0/10 </strong>
                              </span>
                            </li>
                            <li>
                              <span>
                                Passing Grade: <strong> (90%) </strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="submit-btn mt--30">
                          <button
                            className="rbt-btn btn-gradient hover-icon-reverse"
                            onClick={() => setDetails(!details)}
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Start Quiz</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <LessonPagination
              urlPrev="/quiz-with-point"
              urlNext="/quiz-passing-grade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizWithTimeLayout;
