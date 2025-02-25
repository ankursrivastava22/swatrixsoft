"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SingleLesson = (props) => {
  const { id, courseTitle } = props.course;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        className="d-flex justify-content-between rbt-course-wrape mb-4"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div className="col-10 inner d-flex align-items-center gap-2">
          <i className="feather-menu cursor-scroll"></i>
          <h6 className="rbt-title mb-0">{courseTitle}</h6>
        </div>
        <div className="col-2 inner">
          <ul className="rbt-list-style-1 rbt-course-list d-flex gap-2">
            <li>
              <i className="feather-trash"></i>
            </li>
            <li>
              <i
                className="feather-edit"
                data-bs-toggle="modal"
                data-bs-target="#Quiz"
              ></i>
            </li>
            <li>
              <i className="feather-upload"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleLesson;
