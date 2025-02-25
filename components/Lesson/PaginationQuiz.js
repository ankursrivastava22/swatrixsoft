"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import CourseData from "../../data/course-details/courseData.json";

import MutipleSelect from "./Quiz/MutipleSelect";
import SingleSelect from "./Quiz/SingleSelect";
import TrueFalse from "./Quiz/TrueFalse";
import FillBlanks from "./Quiz/FillBlanks";
import Summary from "./Quiz/Summary";
import Ordering from "./Quiz/Ordering";

const PaginationQuiz = () => {
  const [courseList, setCourseList] = useState(CourseData.courseDetails);
  const [hydrated, setHydrated] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(1);

  const handlePaginationClick = (questionNumber) => {
    setActiveQuestion(questionNumber);
  };

  const handleNextClick = () => {
    setActiveQuestion((prev) => Math.min(prev + 1, 6));
  };

  const handlePreviousClick = () => {
    setActiveQuestion((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCourseList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div className="quize-top-meta">
        <div className="quize-top-left">
          <span>
            Questions No:
            <strong>{activeQuestion}/06</strong>
          </span>
          <span>
            Attempts Allowed: <strong>1/20</strong>
          </span>
        </div>
      </div>
      <hr />
      <nav>
        <div className="nav-links mb--30">
          <ul className="rbt-pagination justify-content-start">
            <li className="" onClick={handlePreviousClick}>
              <Link href="#" aria-label="Previous">
                <i className="feather-chevron-left" />
              </Link>
            </li>
            <li
              className={activeQuestion === 1 ? "active" : ""}
              onClick={() => handlePaginationClick(1)}
            >
              <Link href="#">1</Link>
            </li>
            <li
              className={activeQuestion === 2 ? "active" : ""}
              onClick={() => handlePaginationClick(2)}
            >
              <Link href="#">2</Link>
            </li>
            <li
              className={activeQuestion === 3 ? "active" : ""}
              onClick={() => handlePaginationClick(3)}
            >
              <Link href="#">3</Link>
            </li>
            <li
              className={activeQuestion === 4 ? "active" : ""}
              onClick={() => handlePaginationClick(4)}
            >
              <Link href="#">4</Link>
            </li>
            <li
              className={activeQuestion === 5 ? "active" : ""}
              onClick={() => handlePaginationClick(5)}
            >
              <Link href="#">5</Link>
            </li>
            <li
              className={activeQuestion === 6 ? "active" : ""}
              onClick={() => handlePaginationClick(6)}
            >
              <Link href="#">6</Link>
            </li>

            <li onClick={handleNextClick}>
              <Link href="#" aria-label="Next">
                <i className="feather-chevron-right" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <form id="quiz-form" className="quiz-form-wrapper">
        <div
          id="question-1"
          className={`question ${activeQuestion === 1 ? "" : "d-none"}`}
        >
          <MutipleSelect />
        </div>

        <div
          id="question-2"
          className={`question ${activeQuestion === 2 ? "" : "d-none"}`}
        >
          <SingleSelect />
        </div>

        <div
          id="question-3"
          className={`question ${activeQuestion === 3 ? "" : "d-none"}`}
        >
          <TrueFalse />
        </div>
        <div
          id="question-4"
          className={`question ${activeQuestion === 4 ? "" : "d-none"}`}
        >
          <Summary />
        </div>

        <div
          id="question-5"
          className={`question ${activeQuestion === 5 ? "" : "d-none"}`}
        >
          <FillBlanks />
        </div>

        <div
          id="question-6"
          className={`question ${activeQuestion === 6 ? "" : "d-none"}`}
        >
          <div className="rbt-single-quiz">
            <h4>6. Change Question Order</h4>
            <div className="row g-3 mt--10">
              <div className="col-lg-12">
                <div className="rbt-form-chec">
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToVerticalAxis]}
                  >
                    <SortableContext
                      items={courseList}
                      strategy={verticalListSortingStrategy}
                    >
                      {courseList.slice(0, 3).map((course) => (
                        <Ordering key={course.id} course={course} />
                      ))}
                    </SortableContext>
                  </DndContext>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="submit-btn mt--40">
        {activeQuestion === 6 ? (
          <button
            className="rbt-btn btn-gradient hover-icon-reverse"
            onClick={() => handleNextClick(activeQuestion + 1)}
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">Submit</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        ) : (
          <button
            className="rbt-btn btn-gradient hover-icon-reverse"
            onClick={() => handleNextClick(activeQuestion + 1)}
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
          </button>
        )}
      </div>
    </>
  );
};

export default PaginationQuiz;
