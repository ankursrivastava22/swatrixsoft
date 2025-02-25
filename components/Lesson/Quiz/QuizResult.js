import React from "react";

const QuizResult = () => {
  return (
    <>
      <table className="rbt-table rbt-table-scroll table table-borderless">
        <thead>
          <tr>
            <th>No</th>
            <th>Type</th>
            <th>Question</th>
            <th>Given Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="b3 mb--5">1</p>
            </td>
            <td>
              <p className="b3">True/False</p>
            </td>
            <td>
              <p className="b3">What is the capital of France?</p>
            </td>
            <td>
              <p className="b3">True</p>
            </td>
            <td>
              <p className="b3">True</p>
            </td>
            <td>
              <span className="rbt-badge-5 bg-color-success-opacity color-success">
                Correct
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <p className="b3 mb--5">2</p>
            </td>
            <td>
              <p className="b3">Single Chice</p>
            </td>
            <td>
              <p className="b3">What are the key features of Next.js ?</p>
            </td>
            <td>
              <p className="b3">True</p>
            </td>
            <td>
              <p className="b3">False</p>
            </td>
            <td>
              <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                Incorrect
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuizResult;
