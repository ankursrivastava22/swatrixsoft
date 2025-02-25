"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import { useAppContext } from "@/context/Context";

const CourseCardTwo = ({ course }) => {
  const { toggle } = useAppContext();

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [course]);

  return (
    <>
      <div
        className={`rbt-course-grid-column list-column-half ${
          toggle ? "active-list-view" : ""
        }`}
      >
        {course.map((data, index) => (
          <div
            className="course-grid-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div
              className={`rbt-card variation-01 rbt-hover ${
                toggle ? "card-list-2" : ""
              }`}
            >
              <div className="rbt-card-img">
                <Link href={`/course-detail-2/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={235}
                    height={330}
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-category">
                  {data.courseFor &&
                    data.courseFor.map((crs, i) => (
                      <a key={i} href="#">
                        {crs}
                      </a>
                    ))}
                </div>
                <h4 className="rbt-card-title">
                  <Link href={`/course-detail-2/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>
                <span className="lesson-number">
                  {data.lesson} lessons
                  <span className="lesson-time ms-2">
                    ({data.days} hours total)
                  </span>
                </span>
                <p className="rbt-card-text">
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <div className="rbt-card-bottom">
                  <Link
                    className="transparent-button"
                    href={`/course-detail-2/${data.id}`}
                  >
                    Learn More
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCardTwo;
