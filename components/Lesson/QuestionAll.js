"use client";

import React, { useState, useEffect } from "react";

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

const QuestionAll = ({ point }) => {
  const [courseList, setCourseList] = useState(CourseData.courseDetails);
  const [hydrated, setHydrated] = useState(false);

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
      <form id="quiz-form" className="quiz-form-wrapper">
        <div className="mb--80" id="question-1">
          <MutipleSelect point={point} pointNum="1.00" />
        </div>

        <div className="mb--80" id="question-2">
          <SingleSelect point={point} pointNum="2.00" />
        </div>

        <div className="mb--80" id="question-3">
          <TrueFalse point={point} pointNum="1.00" />
        </div>
        <div className="mb--80" id="question-4">
          <Summary point={point} pointNum="2.00" />
        </div>

        <div className="mb--80" id="question-5">
          <FillBlanks point={point} pointNum="3.00" />
        </div>

        <div id="question-6">
          <div className="rbt-single-quiz">
            <h4>6. Change Question Order</h4>
            {point ? (
              <div className="mb--10">
                <span>
                  Mark: <strong> 3.00</strong>
                </span>
              </div>
            ) : (
              ""
            )}
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
    </>
  );
};

export default QuestionAll;
