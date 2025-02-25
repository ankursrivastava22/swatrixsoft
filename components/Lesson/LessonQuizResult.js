import React from "react";

import LessonQuizData from "../../data/lesson.json";

const LessonQuizResult = ({ details, setDetails }) => {
  return (
    <>
      <table className="rbt-table rbt-table-scroll table table-borderless">
        <thead>
          <tr>
            <th>Date</th>
            <th>Question</th>
            <th>Total Marks</th>
            <th>Correct Answer</th>
            <th>Incorrect Answer</th>
            <th>Earned Marks</th>
            <th>Result</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {LessonQuizData &&
            LessonQuizData.lessonQuiz.map((data, index) => (
              <tr key={index}>
                <th>
                  <p className="b3 mb--5">{data.date}</p>
                </th>
                <td>
                  <p className="b3">{data.qus}</p>
                </td>
                <td>
                  <p className="b3">{data.tm}</p>
                </td>
                <td>
                  <p className="b3">{data.ca}</p>
                </td>
                <td>
                  <p className="b3">{data.ia}</p>
                </td>
                <td>
                  <p className="b3">{data.marks}</p>
                </td>
                <td>
                  <span
                    className={`rbt-badge-5 ${
                      data.isPass
                        ? "bg-color-success-opacity color-success"
                        : "bg-color-danger-opacity color-danger"
                    }`}
                  >
                    {data.isPass ? "Pass" : "Fail"}
                  </span>
                </td>
                <td>
                  <button
                    className="rbt-btn btn-border rbt-sm-btn"
                    type="button"
                    onClick={() => setDetails(!details)}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Details </span>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default LessonQuizResult;
