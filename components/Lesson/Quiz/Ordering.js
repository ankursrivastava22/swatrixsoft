"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

const Ordering = (props) => {
  const { id, courseTitle, courseImg } = props.course;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        className="d-flex align-items-center gap-4 rbt-course-wrape mb-4"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <i className="feather-menu cursor-scroll pe-3"></i>
        <Image
          className=""
          src={courseImg}
          width={100}
          height={100}
          alt={courseTitle}
        />
        <h6 className="rbt-title mb-0">{courseTitle}</h6>
      </div>
    </>
  );
};

export default Ordering;
