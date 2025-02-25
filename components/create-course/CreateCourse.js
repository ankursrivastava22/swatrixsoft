"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";

// import CourseData from "../../data/course-details/courseData.json";
import CreateCourseData from "../../data/createCourse.json";

import svgImg from "../../public/images/icons/certificate-none.svg";
import svgImg2 from "../../public/images/icons/certificate-none-portrait.svg";

import InfoForm from "./InfoForm";
import TopicModal from "./QuizModals/TopicModal";
import AdditionalForm from "./AdditionalForm";
import LessonModal from "./QuizModals/LessonModal";
import QuizModal from "./QuizModals/QuizModal";
import AssignmentModal from "./QuizModals/AssignmentModal";
import UpdateModal from "./QuizModals/UpdateModal";
import Lesson from "./lesson/Lesson";

const CreateCourse = () => {
  const fileInputRef = useRef(null);
  const [sortVideo, setSortByVideo] = useState({
    value: "Select Video Sources",
    label: "Select Video Sources",
  });

  const previewImages = CreateCourseData.createCourse[0].landscape.filter(
    (item) => item.type === "preview"
  );
  const portImages = CreateCourseData.createCourse[0].landscape.filter(
    (item) => item.type === "port"
  );

  const sortByVideoOptions = [
    { value: "Youtube", label: "Youtube" },
    { value: "Vimeo", label: "Vimeo" },
    { value: "Local", label: "Local" },
  ];

  const handleImportClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };
  return (
    <>
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
            <div className="accordion" id="tutionaccordionExamplea1">
              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="accOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accCollapseOne"
                    aria-expanded="true"
                    aria-controls="accCollapseOne"
                  >
                    Course Info
                  </button>
                </h2>
                <div
                  id="accCollapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="accOne"
                  data-bs-parent="#tutionaccordionExamplea1"
                >
                  <div className="accordion-body card-body">
                    <InfoForm />
                  </div>
                </div>
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="accTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accCollapseTwo"
                    aria-expanded="false"
                    aria-controls="accCollapseTwo"
                  >
                    Course Intro Video
                  </button>
                </h2>
                <div
                  id="accCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="accTwo"
                  data-bs-parent="#tutionaccordionExamplea1"
                >
                  <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form">
                    <div className="course-field mb--20">
                      <div className="rbt-modern-select bg-transparent height-45 mb--10">
                        <Select
                          instanceId="sortBySelect"
                          className="react-select"
                          classNamePrefix="react-select"
                          defaultValue={sortVideo}
                          onChange={setSortByVideo}
                          options={sortByVideoOptions}
                        />
                      </div>
                    </div>

                    <div className="course-field mb--15">
                      <label htmlFor="videoUrl">Add Your Video URL</label>
                      <input
                        id="videoUrl"
                        type="text"
                        placeholder="Add Your Video URL here."
                      />
                      <small className="d-block mt_dec--5">
                        Example:
                        <Link href="https://www.youtube.com/watch?v=yourvideoid">
                          https://www.youtube.com/watch?v=yourvideoid
                        </Link>
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="accThree3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accCollapseThree3"
                    aria-expanded="false"
                    aria-controls="accCollapseThree3"
                  >
                    Course Builder
                  </button>
                </h2>
                <div
                  id="accCollapseThree3"
                  className="accordion-collapse collapse"
                  aria-labelledby="accThree3"
                  data-bs-parent="#tutionaccordionExamplea12"
                >
                  <div className="accordion-body card-body">
                    <Lesson
                      handleFileChange={handleFileChange}
                      handleImportClick={handleImportClick}
                      fileInputRef={fileInputRef}
                      id="accOne1"
                      target="accCollapseOne1"
                      expanded={true}
                      text="Lesson One"
                      start={0}
                      end={4}
                    />
                    <Lesson
                      handleFileChange={handleFileChange}
                      handleImportClick={handleImportClick}
                      fileInputRef={fileInputRef}
                      id="accOne2"
                      target="accCollapseOne2"
                      expanded={false}
                      text="Lesson Two"
                      start={4}
                      end={8}
                    />

                    <button
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Add New Topic</span>
                        <span className="btn-icon">
                          <i className="feather-plus-circle"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-plus-circle"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item card rbt-course-field-wrapper">
                <h2 className="accordion-header card-header" id="accSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accCollapseSix"
                    aria-expanded="false"
                    aria-controls="accCollapseSix"
                  >
                    Additional Information
                  </button>
                </h2>
                <AdditionalForm />
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header card-header" id="accSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accCollapseEight"
                    aria-expanded="false"
                    aria-controls="accCollapseEight"
                  >
                    Certificate Template
                  </button>
                </h2>
                <div
                  id="accCollapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="accSeven"
                  data-bs-parent="#tutionaccordionExamplea1"
                >
                  <div className="accordion-body card-body">
                    <div className="advance-tab-button advance-tab-button-1">
                      <ul
                        className="rbt-default-tab-button nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            href="#"
                            className="active"
                            id="landscape-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#landscape"
                            role="tab"
                            aria-controls="landscape"
                            aria-selected="true"
                          >
                            <span>Landscape</span>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            href="#"
                            id="portrait-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#portrait"
                            role="tab"
                            aria-controls="portrait"
                            aria-selected="false"
                          >
                            <span>Portrait</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade advance-tab-content-1 active show"
                            id="landscape"
                            role="tabpanel"
                            aria-labelledby="landscape-tab"
                          >
                            <div className="row g-5 mt--10">
                              <div className="col-lg-4">
                                <div className="certificate-inner rbt-image-checkbox">
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="radio-group"
                                    defaultValue="option1"
                                  />
                                  <label htmlFor="option1">
                                    <Image
                                      src={svgImg}
                                      alt="Certificate Image"
                                    />
                                  </label>
                                </div>
                              </div>
                              {CreateCourseData &&
                                previewImages.map((data, index) => (
                                  <div className="col-lg-4" key={index}>
                                    <div className="certificate-inner rbt-image-checkbox">
                                      <input
                                        type="radio"
                                        id={`option${index + 2}`}
                                        name="radio-group"
                                        defaultValue={`option${index + 2}`}
                                      />
                                      <label htmlFor={`option${index + 2}`}>
                                        <Image
                                          src={data.img}
                                          width={242}
                                          height={188}
                                          alt="Certificate Image"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>

                          <div
                            className="tab-pane fade advance-tab-content-1"
                            id="portrait"
                            role="tabpanel"
                            aria-labelledby="portrait-tab"
                          >
                            <div className="row g-5 mt--10">
                              <div className="col-lg-4">
                                <div className="certificate-inner rbt-image-checkbox">
                                  <input
                                    type="radio"
                                    id="optionport1"
                                    name="radio-group"
                                    defaultValue="optionport1"
                                  />
                                  <label htmlFor="optionport1">
                                    <Image
                                      src={svgImg2}
                                      alt="Certificate Image"
                                    />
                                  </label>
                                </div>
                              </div>
                              {CreateCourseData &&
                                portImages.map((data, index) => (
                                  <div className="col-lg-4" key={index}>
                                    <div className="certificate-inner rbt-image-checkbox">
                                      <input
                                        type="radio"
                                        id={`optionport${index + 3}`}
                                        name="radio-group"
                                        defaultValue={`optionport${index + 3}`}
                                      />
                                      <label htmlFor={`optionport${index + 3}`}>
                                        <Image
                                          src={data.img}
                                          width={242}
                                          height={340}
                                          alt="Certificate Image"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                ))}
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
          <div className="mt--10 row g-5">
            <div className="col-lg-4">
              <Link
                className="rbt-btn hover-icon-reverse bg-primary-opacity w-100 text-center"
                href="/course-details"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Preview</span>
                  <span className="btn-icon">
                    <i className="feather-eye"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-eye"></i>
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-lg-8">
              <Link
                className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                href="#"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Create Course</span>
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

        <div className="col-lg-4">
          <div className="rbt-create-course-sidebar course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
            <div className="inner">
              <div className="section-title mb--30">
                <h4 className="title">Course Upload Tips</h4>
              </div>
              <div className="rbt-course-upload-tips">
                <ul className="rbt-list-style-1">
                  <li>
                    <i className="feather-check"></i> Set the Course Price
                    option or make it free.
                  </li>
                  <li>
                    <i className="feather-check"></i> Standard size for the
                    course thumbnail is 700x430.
                  </li>
                  <li>
                    <i className="feather-check"></i> Video section controls the
                    course overview video.
                  </li>
                  <li>
                    <i className="feather-check"></i> Course Builder is where
                    you create & organize a course.
                  </li>
                  <li>
                    <i className="feather-check"></i> Add Topics in the Course
                    Builder section to create lessons, quizzes, and assignments.
                  </li>
                  <li>
                    <i className="feather-check"></i> Prerequisites refers to
                    the fundamental courses to complete before taking this
                    particular course.
                  </li>
                  <li>
                    <i className="feather-check"></i> Information from the
                    Additional Data section shows up on the course single page.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopicModal />
      <UpdateModal />
      <LessonModal />
      <QuizModal />
      <AssignmentModal />
    </>
  );
};

export default CreateCourse;
