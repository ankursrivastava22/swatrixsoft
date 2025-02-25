import React from "react";

const QuizHead = ({ questionNo, totalQuestion, attemp }) => {
  return (
    <>
      <div className="quize-top-meta">
        <div className="quize-top-left">
          <span>
            Questions No:
            <strong>
              {questionNo}/{totalQuestion}
            </strong>
          </span>
          <span>
            Attempts Allowed: <strong>{attemp}</strong>
          </span>
        </div>
        <div className="quize-top-right">
          <span>
            Time remaining: <strong>No Limit</strong>
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default QuizHead;
