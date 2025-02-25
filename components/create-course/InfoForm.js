"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/others/thumbnail-placeholder.svg";

const InfoForm = () => {
  const [inp, setInp] = useState(100);

  const handleInputChange = (e) => {
    const { value } = e.target;
    // Allow only numeric characters
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setInp(sanitizedValue);
  };

  const handleIncrement = () => {
    setInp((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setInp((prevValue) => Math.max(0, prevValue - 1));
  };

  return (
    <>
      <div className="rbt-course-field-wrapper rbt-default-form">
        <div className="course-field mb--15">
          <label htmlFor="field-1">Course Title</label>
          <input id="field-1" type="text" placeholder="New Course" />
          <small className="d-block mt_dec--5">
            <i className="feather-info"></i> Title should be 30 charecter.
          </small>
        </div>
        <div className="course-field mb--15">
          <label htmlFor="field-2">Course Slug</label>
          <input id="field-2" type="text" placeholder="new-course" />
          <small className="d-block mt_dec--5">
            <i className="feather-info"></i> Permalink:
            <Link href="https://yourdomain.com/new-course">
              https://yourdomain.com/new-course
            </Link>
          </small>
        </div>

        <div className="course-field mb--15">
          <label htmlFor="aboutCourse">About Course</label>
          <textarea id="aboutCourse" rows="10"></textarea>
          <small className="d-block mt_dec--5">
            <i className="feather-info"></i> HTML or plain text allowed, no
            emoji This field is used for search, so please be descriptive!
          </small>
        </div>

        <div className="course-field mb--15 edu-bg-gray">
          <h6>Course Settings</h6>
          <div className="rbt-course-settings-content">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="advance-tab-button advance-tab-button-1">
                  <ul
                    className="rbt-default-tab-button nav nav-tabs"
                    id="courseSetting"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        href="#"
                        className="active"
                        id="general-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#general"
                        role="tab"
                        aria-controls="general"
                        aria-selected="true"
                      >
                        <span>General</span>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#"
                        id="content-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#content"
                        role="tab"
                        aria-controls="content"
                        aria-selected="false"
                      >
                        <span>Content Drip</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tab-content">
                  <div
                    className="tab-pane fade advance-tab-content-1 active show"
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    <div className="course-field mb--20">
                      <label htmlFor="field-3">Maximum Students</label>
                      <div className="pro-quantity">
                        <div className="pro-qty m-0">
                          <span
                            className="dec qtybtn"
                            onClick={() =>
                              setInp((prevValue) => Math.max(0, prevValue - 1))
                            }
                          >
                            -
                          </span>
                          <input
                            id="field-3"
                            type="text"
                            name="text"
                            value={inp}
                            onChange={handleInputChange}
                          />
                          <span
                            className="inc qtybtn"
                            onClick={() => setInp((prevValue) => prevValue + 1)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <small>
                        <i className="feather-info"></i> Number of students that
                        can enrol in this course. Set 0 for no limits.
                      </small>
                    </div>

                    <div className="course-field mb--20">
                      <label htmlFor="field-4">Difficulty Level</label>
                      <div className="rbt-modern-select bg-transparent height-45 mb--10">
                        <select className="w-100" id="field-4">
                          <option>All Levels</option>
                          <option>Intermediate</option>
                          <option>Beginner</option>
                          <option>Advance</option>
                          <option>Expert</option>
                        </select>
                      </div>
                      <small>
                        <i className="feather-info"></i> Course difficulty level
                      </small>
                    </div>

                    <div className="course-field mb--20">
                      <label
                        className="form-check-label d-inline-block"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Public Course
                      </label>
                      <div className="form-check form-switch mb--10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                      <small>
                        <i className="feather-info"></i> Make This Course
                        Public. No enrollment required.
                      </small>
                    </div>

                    <div className="course-field mb--20">
                      <label
                        className="form-check-label d-inline-block"
                        htmlFor="flexSwitchCheckDefault2"
                      >
                        Q&A
                      </label>
                      <div className="form-check form-switch mb--10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault2"
                        />
                      </div>
                      <small>
                        <i className="feather-info"></i> Enable Q&A section for
                        your course
                      </small>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade advance-tab-content-1"
                    id="content"
                    role="tabpanel"
                    aria-labelledby="content-tab"
                  >
                    <div className="rbt-content-drip-content">
                      <div className="course-field pb--20">
                        <p className="rbt-checkbox-wrapper mb--5">
                          <input
                            id="rbt-checkbox-1"
                            name="rbt-checkbox-1"
                            type="checkbox"
                            defaultValue="yes"
                          />
                          <label htmlFor="rbt-checkbox-1">Enable</label>
                        </p>
                        <small>
                          <i className="feather-info"></i>
                          Enable / Disable content drip
                        </small>
                      </div>
                      <hr className="rbt-separator m-0" />

                      <div className="rbt-course-drip-option pt--20">
                        <h6 className="mb--10">Content Drip Type</h6>
                        <p className="mb--10 b3">
                          You can schedule your course content using the above
                          content drip options.
                        </p>
                        <div className="course-drop-option">
                          <div className="rbt-form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="rbt-radio"
                              id="rbt-radio-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rbt-radio-1"
                            >
                              Schedule course contents by date
                            </label>
                          </div>
                          <div className="rbt-form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="rbt-radio"
                              id="rbt-radio-2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rbt-radio-2"
                            >
                              Content available after X days from enrollment
                            </label>
                          </div>
                          <div className="rbt-form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="rbt-radio"
                              id="rbt-radio-3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rbt-radio-3"
                            >
                              Course content available sequentially
                            </label>
                          </div>
                          <div className="rbt-form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="rbt-radio"
                              id="rbt-radio-4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rbt-radio-4"
                            >
                              Course content unlocked after finishing
                              prerequisites
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-field mb--15 edu-bg-gray">
          <h6>Course Price</h6>
          <div className="rbt-course-settings-content">
            <div className="row">
              <div className="col-lg-4">
                <div className="advance-tab-button advance-tab-button-1">
                  <ul
                    className="rbt-default-tab-button nav nav-tabs"
                    id="coursePrice"
                    role="tablist"
                  >
                    <li className="nav-item w-100" role="presentation">
                      <a
                        href="#"
                        className="active"
                        id="paid-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#paid"
                        role="tab"
                        aria-controls="paid"
                        aria-selected="true"
                      >
                        <span>Paid</span>
                      </a>
                    </li>
                    <li className="nav-item w-100" role="presentation">
                      <a
                        href="#"
                        id="free-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#free"
                        role="tab"
                        aria-controls="free"
                        aria-selected="false"
                      >
                        <span>Free</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tab-content">
                  <div
                    className="tab-pane fade advance-tab-content-1 active show"
                    id="paid"
                    role="tabpanel"
                    aria-labelledby="paid-tab"
                  >
                    <div className="course-field mb--15">
                      <label htmlFor="regularPrice-1">Regular Price ($)</label>
                      <input
                        id="regularPrice-1"
                        type="number"
                        placeholder="$ Regular Price"
                      />
                      <small className="d-block mt_dec--5">
                        <i className="feather-info"></i> The Course Price
                        Includes Your Author Fee.
                      </small>
                    </div>

                    <div className="course-field mb--15">
                      <label htmlFor="discountedPrice-1">
                        Discounted Price ($)
                      </label>
                      <input
                        id="discountedPrice-1"
                        type="number"
                        placeholder="$ Discounted Price"
                      />
                      <small className="d-block mt_dec--5">
                        <i className="feather-info"></i> The Course Price
                        Includes Your Author Fee.
                      </small>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade advance-tab-content-1"
                    id="free"
                    role="tabpanel"
                    aria-labelledby="free-tab"
                  >
                    <div className="course-field">
                      <p className="b3">This Course is free for everyone.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-field mb--20">
          <h6>Choose Categories</h6>
          <div className="rbt-modern-select bg-transparent height-45 w-100 mb--10">
            <select className="w-100">
              <option>Web Developer</option>
              <option>App Developer</option>
              <option>Javascript</option>
              <option>React</option>
              <option>WordPress</option>
              <option>jQuery</option>
              <option>Vue Js</option>
              <option>Angular</option>
            </select>
          </div>
        </div>

        <div className="course-field mb--20">
          <h6>Course Thumbnail</h6>
          <div className="rbt-create-course-thumbnail upload-area">
            <div className="upload-area">
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

          <small>
            <i className="feather-info"></i> <b>Size:</b> 700x430 pixels,
            <b>File Support:</b> JPG, JPEG, PNG, GIF, WEBP
          </small>
        </div>
      </div>
    </>
  );
};

export default InfoForm;
