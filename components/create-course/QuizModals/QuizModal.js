"use client";

import React, { useState, useRef, useMemo } from "react";

import Settings from "../QuizTab/Settings";
import Question from "../QuizTab/Question";
import QuestionType from "../QuizTab/QuestionType";

const QuizModal = () => {
  const [selectedOption, setSelectedOption] = useState("True/False");
  const [currentStep, setCurrentStep] = useState(1);
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const editor = useRef(null);
  const answerEditor = useRef(null);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const config = useMemo(
    () => ({
      toolbarAdaptive: false,
      buttons: ["image", "bold", "about"],
      filebrowser: {
        permissionsPresets: {
          allowFiles: false,
          allowFileMove: false,
          allowFileUpload: false,
          allowFileUploadRemote: false,
          allowFileRemove: false,
          allowFileRename: false,
          allowFolders: false,
          allowFolderCreate: false,
          allowFolderMove: false,
          allowFolderRemove: false,
          allowFolderRename: false,
          allowImageResize: false,
          allowImageCrop: false,
        },
        ajax: {
          url: "https://xdsoft.net/jodit/finder/",
        },
      },
    }),
    []
  );

  return (
    <>
      <div
        className="rbt-default-modal modal fade m-auto"
        id="Quiz"
        tabIndex="-1"
        aria-labelledby="QuizLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="rbt-round-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="inner rbt-default-form">
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="modal-title mb--20" id="LessonLabel">
                      Quiz
                    </h5>
                    <div className="course-field quiz-modal mb--40">
                      <div className="d-flex justify-content-between">
                        <span>Quiz info</span>
                        <span>Question</span>
                        <span>Settings</span>
                      </div>
                      <div className="position-relative m-4">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Progress"
                          aria-valuenow={(currentStep / 3) * 100}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: `${(currentStep / 3) * 100}%` }}
                          ></div>
                        </div>
                        <button
                          type="button"
                          className={`position-absolute top-0 start-0 translate-middle btn quiz-modal-btn ${
                            currentStep >= 1 ? "quiz-modal__active" : ""
                          }`}
                        >
                          <i className="feather-check"></i>
                        </button>
                        <button
                          type="button"
                          className={`position-absolute top-0 start-50 translate-middle btn quiz-modal-btn ${
                            currentStep >= 2 ? "quiz-modal__active" : ""
                          }`}
                        >
                          {currentStep >= 2 ? (
                            <i className="feather-check"></i>
                          ) : (
                            "2"
                          )}
                        </button>
                        <button
                          type="button"
                          className={`position-absolute top-0 start-100 translate-middle btn quiz-modal-btn ${
                            currentStep >= 3 ? "quiz-modal__active" : ""
                          } btn-secondary`}
                        >
                          {currentStep >= 3 ? (
                            <i className="feather-check"></i>
                          ) : (
                            "3"
                          )}
                        </button>
                      </div>
                    </div>
                    {currentStep === 1 && (
                      <form className="tabs-1">
                        <div className="course-field mb--20">
                          <label htmlFor="modal-field-1">Quiz Title</label>
                          <input
                            id="modal-field-1"
                            type="text"
                            placeholder="Type your quiz title here"
                          />
                        </div>
                        <div className="course-field mb--20">
                          <label htmlFor="modal-field-2">Quiz Summary</label>
                          <textarea id="modal-field-2"></textarea>
                          <small>
                            <i className="feather-info"></i> Add a summary of
                            short text to prepare students for the activities
                            for the Quiz. The text is shown on the course page
                            beside the tooltip beside the Quiz name.
                          </small>
                        </div>
                      </form>
                    )}
                    {currentStep === 2 && (
                      <form className="tabs-2">
                        {toggle ? (
                          <div className="content">
                            <div className="course-field mb--20">
                              <QuestionType
                                handleBackClick={handleBackClick}
                                title="Question No.01"
                                type="Single Choice"
                              />
                              <QuestionType
                                handleBackClick={handleBackClick}
                                title="Question No.02"
                                type="True/False"
                              />
                              <QuestionType
                                handleBackClick={handleBackClick}
                                title="Question No.03"
                                type="Multi Choice"
                              />
                            </div>
                            <div className="course-field">
                              <button
                                className="rbt-btn btn-border hover-icon-reverse rbt-sm-btn btn-1"
                                type="button"
                                onClick={() => setToggle(!toggle)}
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Add Question</span>
                                  <span className="btn-icon">
                                    <i className="feather-plus-square"></i>
                                  </span>
                                  <span className="btn-icon">
                                    <i className="feather-plus-square"></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <Question
                            handleSelectChange={handleSelectChange}
                            selectedOption={selectedOption}
                            editor={editor}
                            content={content}
                            setContent={setContent}
                            answerEditor={answerEditor}
                            answer={answer}
                            setAnswer={setAnswer}
                            config={config}
                          />
                        )}
                      </form>
                    )}
                    {currentStep === 3 && <Settings />}
                  </div>
                </div>
              </div>
            </div>
            <div className="top-circle-shape"></div>
            <div className="modal-footer pt--30 justify-content-between">
              <button
                type="button"
                className="rbt-btn btn-border btn-md radius-round-10"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <div className="content">
                <button
                  type="button"
                  className="rbt-btn btn-border btn-md radius-round-10 mr--10"
                  onClick={handleBackClick}
                >
                  Back
                </button>
                {toggle ? (
                  <button
                    type="button"
                    className="rbt-btn btn-md btn-2"
                    onClick={handleNextClick}
                  >
                    Save & Next
                  </button>
                ) : (
                  <button
                    type="button"
                    className="rbt-btn btn-md btn-2"
                    onClick={() => setToggle(!toggle)}
                  >
                    Add Question
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizModal;
