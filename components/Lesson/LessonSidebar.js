"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import LessonData from "../../data/lesson.json";

const LessonSidebar = () => {
  const [activeTab, setActiveTab] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  useEffect(() => {
    const lessonItems = LessonData.lesson;

    lessonItems.forEach((lesson) => {
      const matchedItem = lesson.listItem.find((item) =>
        isActive(item.lssonLink)
      );

      if (matchedItem) {
        setActiveTab(lesson.id);
      }
    });
  }, [pathname]);

  return (
    <>
      <div className="rbt-course-feature-inner rbt-search-activation">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Course Content</h4>
        </div>
        <div className="lesson-search-wrapper">
          <form action="#" className="rbt-search-style-1">
            <input
              className="rbt-search-active"
              type="text"
              placeholder="Search Lesson"
            />
            <button className="search-btn disabled">
              <i className="feather-search"></i>
            </button>
          </form>
        </div>
        <hr className="mt--10" />
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
          <div className="accordion" id="accordionExampleb2">
            {LessonData &&
              LessonData.lesson.map((data, index) => (
                <div className="accordion-item card" key={index}>
                  <h2
                    className="accordion-header card-header"
                    id={`headingTwo${index + 1}`}
                  >
                    <button
                      className={`accordion-button ${
                        data.id === activeTab ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      aria-expanded={data.id === activeTab}
                      data-bs-target={`#collapseTwo${index + 1}`}
                      aria-controls={`collapseTwo${index + 1}`}
                      onClick={() => setActiveTab(data.id)}
                    >
                      {data.title}
                      {data.title === "Histudy Quiz" ? (
                        <span className="rbt-badge-5 ml--10">
                          {isActive("/questions-types")
                            ? 1
                            : isActive("/all-questions")
                            ? 2
                            : isActive("/pagination-quiz")
                            ? 3
                            : isActive("/single-question")
                            ? 4
                            : isActive("/quiz-with-point")
                            ? 5
                            : isActive("/quiz-with-custom-timer")
                            ? 6
                            : isActive("/quiz-passing-grade")
                            ? 7
                            : isActive("/lesson-quiz")
                            ? 8
                            : isActive("/lesson-quiz-result")
                            ? 9
                            : 0}
                          /{data.listItem.length}
                        </span>
                      ) : data.title === "Welcome History" ? (
                        <span className="rbt-badge-5 ml--10">
                          {isActive("/lesson")
                            ? 1
                            : isActive("/lesson-intro")
                            ? 2
                            : 0}
                          /{data.listItem.length}
                        </span>
                      ) : data.title === "Welcome Lessons" ? (
                        <span className="rbt-badge-5 ml--10">
                          {isActive("/lesson")
                            ? 1
                            : isActive("/lesson-intro")
                            ? 2
                            : 0}
                          /{data.listItem.length}
                        </span>
                      ) : data.title === "Histudy Assignments" ? (
                        <span className="rbt-badge-5 ml--10">
                          {isActive("/lesson-assignments")
                            ? 1
                            : isActive("/lesson-assignments-submit")
                            ? 2
                            : 0}
                          /{data.listItem.length}
                        </span>
                      ) : (
                        ""
                      )}
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo${index + 1}`}
                    className={`accordion-collapse collapse ${
                      data.id === activeTab ? "show" : ""
                    }`}
                    aria-labelledby={`headingTwo${index + 1}`}
                  >
                    <div className="accordion-body card-body">
                      <ul className="rbt-course-main-content liststyle">
                        {data.listItem.map((innerData, innerIndex) => (
                          <li key={innerIndex}>
                            <Link
                              className={
                                isActive(innerData.lssonLink) ? "active" : ""
                              }
                              href={`${innerData.lssonLink}`}
                              onClick={() => setActiveTab(data.id)}
                            >
                              <div className="course-content-left">
                                {innerData.iconHelp ? (
                                  <i className="feather-help-circle"></i>
                                ) : (
                                  <i
                                    className={`feather-${
                                      innerData.iconFile
                                        ? "file-text"
                                        : "play-circle"
                                    }`}
                                  ></i>
                                )}
                                <span className="text">
                                  {innerData.lessonName}
                                </span>
                              </div>
                              <div className="course-content-right">
                                {innerData.lable && innerData.time > 0 ? (
                                  <span className="min-lable">
                                    {innerData.time} min
                                  </span>
                                ) : (
                                  ""
                                )}
                                <span
                                  className={`rbt-check ${
                                    isActive(innerData.lssonLink)
                                      ? ""
                                      : "unread"
                                  }`}
                                >
                                  <i
                                    className={`feather-${
                                      isActive(innerData.lssonLink)
                                        ? "check"
                                        : "circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonSidebar;
