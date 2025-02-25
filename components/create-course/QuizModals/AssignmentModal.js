"use client";

import React, { useState, useRef } from "react";

import TextEditorWrapper from "../TextEditorWrapper";

const AssignmentModal = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImportClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <>
      <div
        className="rbt-default-modal modal fade"
        id="Assignment"
        tabIndex="-1"
        aria-labelledby="AssignmentLabel"
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
                    <form action="#">
                      <h5 className="modal-title mb--20" id="LessonLabel">
                        Assignment
                      </h5>
                      <div className="course-field mb--20">
                        <label htmlFor="modal-field-1">Assignment Title</label>
                        <input
                          id="modal-field-1"
                          type="text"
                          placeholder="Assignments"
                        />
                      </div>
                      <div className="course-field mb--30">
                        <label htmlFor="modal-field-3">Summary</label>
                        <TextEditorWrapper
                          ref={editorRef}
                          value={content}
                          onChange={(newContent) => setContent(newContent)}
                        />
                      </div>
                      <div className="course-field mb--20">
                        <h6>Attachments</h6>
                        <div className="rbt-modern-select bg-transparent height-45 w-100 mb--10">
                          <button
                            className="rbt-btn btn-md btn-border hover-icon-reverse"
                            onClick={handleImportClick}
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                Upload Attachments
                              </span>
                              <span className="btn-icon">
                                <i className="feather-paperclip"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-paperclip"></i>
                              </span>
                            </span>
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="course-field mb--15">
                        <label>Time Limit</label>
                        <div className="row row--15">
                          <div className="col-sm-6 col-lg-4">
                            <input
                              className="shadow-none"
                              type="number"
                              placeholder="00"
                            />
                          </div>
                          <div className="col-sm-5 col-lg-4">
                            <select className="w-75" style={{ height: "50px" }}>
                              <option>Weaks</option>
                              <option>Day</option>
                              <option>Hour</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="course-field mb--15">
                        <label>Total Points</label>
                        <div className="row row--15">
                          <div className="col-lg-4">
                            <input
                              className="shadow-none"
                              type="number"
                              placeholder="0"
                            />
                            <small>
                              <i className="feather-info pr--5"></i>
                              Maximum points a student can score
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="course-field mb--15">
                        <label>Minimum Pass Points</label>
                        <div className="row row--15">
                          <div className="col-lg-4">
                            <input
                              className="shadow-none"
                              type="number"
                              placeholder="0"
                            />
                          </div>
                          <small>
                            <i className="feather-info pr--5"></i>
                            Minimum points required for the student to pass this
                            assignment.
                          </small>
                        </div>
                      </div>
                      <div className="course-field mb--15">
                        <label>Allow to upload files</label>
                        <div className="row row--15">
                          <div className="col-lg-4">
                            <input
                              className="shadow-none"
                              type="number"
                              placeholder="0"
                            />
                          </div>
                          <small>
                            <i className="feather-info pr--5"></i>
                            Define the number of files that a student can upload
                            in this assignment. Input 0 to disable the option to
                            upload.
                          </small>
                        </div>
                      </div>
                      <div className="course-field mb--15">
                        <label>Maximum file size limit</label>
                        <div className="row row--15">
                          <div className="col-lg-4">
                            <input
                              className="shadow-none"
                              type="number"
                              placeholder="0"
                            />
                          </div>
                          <small>
                            <i className="feather-info pr--5"></i>
                            Define maximum file size attachment in MB
                          </small>
                        </div>
                      </div>
                    </form>
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
              <button type="button" className="rbt-btn btn-md">
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentModal;
