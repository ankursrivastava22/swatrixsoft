import Link from "next/link";
import React from "react";

const QuestionType = () => {
  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="inner py-0">
            <div className="section-title">
              <p>
                At Histudy, we offer a variety of
                <strong> 7 interactive quiz types </strong>
                designed to enhance the learning experience. Our quizzes are an
                excellent tool for assessing students&apos; knowledge, making
                education both engaging and effective. With Histudy, learning is
                not just informative but also enjoyable.
              </p>

              <ul className="rbt-list-style-1">
                <li>1. True/False</li>
                <li>2. Single Choice </li>
                <li>3. Multiple Choice </li>
                <li>4. Open Ended</li>
                <li>5. Fill in the Blanks</li>
                <li>6. Sort Answer</li>
                <li>7. Matching</li>
                <li>8. Image Matching</li>
              </ul>
            </div>

            <Link
              className="rbt-btn btn-gradient hover-icon-reverse mt--30"
              href="/all-questions"
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
        </div>
      </div>
    </>
  );
};

export default QuestionType;
