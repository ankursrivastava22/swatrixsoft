import React from "react";

import Image from "next/image";

import TextEditorWrapper from "../TextEditorWrapper";

import img from "../../../public/images/others/thumbnail-placeholder.svg";

const Question = ({
  selectedOption,
  handleSelectChange,
  editor,
  content,
  setContent,
  answer,
  setAnswer,
  config,
  answerEditor,
}) => {
  return (
    <>
      <div className="content">
        <div className="course-field mb--20">
          <label htmlFor="modal-field-3">Write your question here</label>
          <input id="modal-field-3" type="text" placeholder="Question" />
        </div>
        <div className="course-field mb--20">
          <h6>Select your question type</h6>
          <div className="rbt-modern-select bg-transparent height-45 w-100 mb--10">
            <select
              className="w-100"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option>True/False</option>
              <option>Single Choice </option>
              <option>Multiple Choice </option>
              <option>Open Ended</option>
              <option>Fill in the Blanks</option>
              <option>Sort Answer</option>
              <option>Matching</option>
              <option>Image Matching</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-5 mt--20">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckAnswer"
              />
              <label className="form-check-label" htmlFor="switchCheckAnswer">
                Answer Required
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckRandomize"
              />
              <label
                className="form-check-label"
                htmlFor="switchCheckRandomize"
              >
                Randomize
              </label>
            </div>
          </div>
        </div>
        <div className="course-field mb--20">
          <label htmlFor="modal-field-3">Point(s) for this answer</label>
          <div className="d-flex align-items-center gap-5 mb--20">
            <div className="content">
              <input
                className="mb-0"
                id="modal-field-3"
                type="text"
                placeholder="set the mark ex. 10"
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckAnswerTwo"
              />
              <label
                className="form-check-label"
                htmlFor="switchCheckAnswerTwo"
              >
                Answer Required
              </label>
            </div>
          </div>
          <h6 className="mb-3">Description (Optional)</h6>
          <TextEditorWrapper
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
          <small>
            <i className="feather-info"></i> Input options for the question and
            select the correct answer.
          </small>

          <div
            className={`course-field mt--20 ${
              selectedOption === "Open Ended" ||
              selectedOption === "Sort Answer"
                ? "d-block"
                : "d-none"
            }`}
          >
            <small>
              <i className="feather-info"></i> No option is necessary for this
              answer type
            </small>
          </div>
          <div
            className={`course-field rbt-lesson-rightsidebar mt--20 ${
              selectedOption === "True/False" ? "d-block" : "d-none"
            }`}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="rbt-form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbt-radio"
                    id="rbt-single-1"
                  />
                  <label className="form-check-label" htmlFor="rbt-single-1">
                    True
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbt-radio"
                    id="rbt-single-2"
                  />
                  <label className="form-check-label" htmlFor="rbt-single-2">
                    False
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`course-field mt--20 ${
              selectedOption === "Single Choice" ||
              selectedOption === "Multiple Choice" ||
              selectedOption === "Matching"
                ? "d-block"
                : "d-none"
            }`}
          >
            <label htmlFor="modal-field-3">Answer title</label>
            <input id="modal-field-3" type="text" placeholder="title" />
            {selectedOption === "Matching" ? (
              <div className="content">
                <label htmlFor="modal-Matching-1">Matching Answer title</label>
                <input
                  id="modal-Matching-1"
                  type="text"
                  placeholder="matching"
                />
              </div>
            ) : (
              ""
            )}
            <div className={`rbt-create-course-thumbnail upload-area mt--20`}>
              <h6>Upload Image</h6>
              <div className="upload-area mb--20">
                <div className="brows-file-wrapper" data-black-overlay="9">
                  <input
                    name="createinputfile"
                    id="createinputfile"
                    type="file"
                    className="inputfile"
                  />
                  <Image
                    id="createfileImage"
                    src={img}
                    width={797}
                    height={262}
                    alt="file image"
                  />

                  <label
                    className="d-flex"
                    htmlFor="createinputfile"
                    title="No File Choosen"
                  >
                    <i className="feather-upload"></i>
                    <span className="text-center">Choose a File</span>
                  </label>
                </div>
              </div>
              <h6 className="mb-2">Display format for options</h6>
              <div className="d-flex gap-4">
                <div className="rbt-form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbt-radio"
                    id="rbt-radio1"
                  />
                  <label
                    className="form-check-label h-auto"
                    htmlFor="rbt-radio1"
                  >
                    Only Text
                  </label>
                </div>
                <div className="rbt-form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbt-radio"
                    id="rbt-radio2"
                  />
                  <label
                    className="form-check-label h-auto"
                    htmlFor="rbt-radio2"
                  >
                    Image Only
                  </label>
                </div>
                <div className="rbt-form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbt-radio"
                    id="rbt-radio3"
                  />
                  <label
                    className="form-check-label h-auto"
                    htmlFor="rbt-radio3"
                  >
                    Text & Image both
                  </label>
                </div>
              </div>

              <button className="rbt-btn rbt-sm-btn mt--20" type="button">
                Update Answer
              </button>
            </div>
          </div>
          <div
            className={`course-field mt--20 ${
              selectedOption === "Image Matching" ? "d-block" : "d-none"
            }`}
          >
            <div className={`rbt-create-course-thumbnail upload-area mt--20`}>
              <h6>Upload Image</h6>
              <div className="upload-area mb--20">
                <div className="brows-file-wrapper" data-black-overlay="9">
                  <input
                    name="createinputfile"
                    id="createinputfile"
                    type="file"
                    className="inputfile"
                  />
                  <Image
                    id="createfileImage"
                    src={img}
                    width={797}
                    height={262}
                    alt="file image"
                  />

                  <label
                    className="d-flex"
                    htmlFor="createinputfile"
                    title="No File Choosen"
                  >
                    <i className="feather-upload"></i>
                    <span className="text-center">Choose a File</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="content">
              <label htmlFor="modal-Image-1">Image matched text</label>
              <input id="modal-Image-1" type="text" placeholder="" />
            </div>
            <button className="rbt-btn rbt-sm-btn mt--10" type="button">
              Update Answer
            </button>
          </div>
          <div
            className={`course-field mt--20 ${
              selectedOption === "Fill in the Blanks" ? "d-block" : "d-none"
            }`}
          >
            <label htmlFor="modal-field-3">Question Title</label>
            <input
              className="mb-0"
              id="modal-field-3"
              type="text"
              placeholder="title"
            />
            <small>
              <i className="feather-info"></i> Please make sure to use the dash
              variable in your question title to show the blanks in your
              question. You can use multiple dash variables in one question.
            </small>
            <div className={`rbt-create-course-thumbnail upload-area mt--20`}>
              <h6 className="mb-2">Correct Answer(s)</h6>
              <input
                className="mb-0"
                id="modal-field-3"
                type="text"
                placeholder="answer"
              />
              <small>
                <i className="feather-info"></i> Separate multiple answers by a
                vertical bar |. 1 answer per dash variable is defined in the
                question. Example: Apple | Banana | Orange question.
              </small>
            </div>
            <button className="rbt-btn rbt-sm-btn mt--20" type="button">
              Update Answer
            </button>
          </div>

          <div className="course-field mt--20">
            <h6 className="mb-3">Answer Explanation</h6>
            <TextEditorWrapper
              ref={answerEditor}
              value={answer}
              config={config}
              onChange={(newContent) => {
                setAnswer(newContent);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
