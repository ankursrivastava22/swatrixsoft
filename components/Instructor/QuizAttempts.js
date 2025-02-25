"use client";

import { useState } from "react";
import Select, { components } from "react-select";

const QuizAttempts = () => {
  const components = { ValueContainer, MultiValue };
  const [course, setCourses] = useState({ value: "", label: "" });
  const [sortBy, setSortBy] = useState({ value: "Default", label: "Default" });
  const [sortByOffer, setSortByOffer] = useState({
    value: "Free",
    label: "Free",
  });

  const courses = [
    { value: "Web Design HTML", label: "Web Design HTML" },
    { value: "Graphic Photoshop", label: "Graphic Photoshop" },
    { value: "English Career", label: "English Career" },
    { value: "Spoken English Career", label: "Spoken English Career" },
    { value: "Art Painting Experts", label: "Art Painting Experts" },
    { value: "App Development Experts", label: "App Development Experts" },
    { value: "Web Application Experts", label: "Web Application Experts" },
    { value: "Php Development Experts", label: "Php Development Experts" },
  ];

  const sortByOptions = [
    { value: "Default", label: "Default" },
    { value: "Latest", label: "Latest" },
    { value: "Popularity", label: "Popularity" },
    { value: "Trending", label: "Trending" },
    { value: "Price: low to high", label: "Price: low to high" },
    { value: "Price: high to low", label: "Price: high to low" },
  ];

  const sortByOffers = [
    { value: "Free", label: "Free" },
    { value: "Paid", label: "Paid" },
    { value: "Premium", label: "Premium" },
  ];

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">My Quiz Attempts</h4>
          </div>

          <div className="rbt-dashboard-filter-wrapper">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="filter-select rbt-modern-select">
                  <span className="select-label d-block">Courses</span>
                  <Select
                    instanceId="sortByAuthor"
                    className="react-select"
                    classNamePrefix="react-select"
                    defaultValue={course}
                    onChange={setCourses}
                    options={courses}
                    closeMenuOnSelect={true}
                    isMulti
                    components={components}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="filter-select rbt-modern-select">
                  <span className="select-label d-block">Short By</span>
                  <Select
                    instanceId="sortBySelect"
                    className="react-select"
                    classNamePrefix="react-select"
                    defaultValue={sortBy}
                    onChange={setSortBy}
                    options={sortByOptions}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="filter-select rbt-modern-select">
                  <span className="select-label d-block">Short By Offer</span>
                  <Select
                    instanceId="sortBySelect"
                    className="react-select"
                    classNamePrefix="react-select"
                    defaultValue={sortByOffer}
                    onChange={setSortByOffer}
                    options={sortByOffers}
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="mt--30" />

          <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Qus</th>
                  <th>TM</th>
                  <th>CA</th>
                  <th>Result</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p className="b3 mb--5">December 26, 2022</p>
                    <span className="h6 mb--5">
                      Write a short essay on yourself using the 5
                    </span>
                    <p className="b3">
                      Student: <a href="#">John Due</a>
                    </p>
                  </th>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <p className="b3">8</p>
                  </td>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Pass
                    </span>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0" />
                      </a>
                      <a
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="b3 mb--5">December 26, 2022</p>
                    <span className="h6 mb--5">
                      Write a short essay on yourself using the 5
                    </span>
                    <p className="b3">
                      Student: <a href="#">John Due</a>
                    </p>
                  </th>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <p className="b3">8</p>
                  </td>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Fail
                    </span>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0" />
                      </a>
                      <a
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="b3 mb--5">December 26, 2022</p>
                    <span className="h6 mb--5">
                      Write a short essay on yourself using the 5
                    </span>
                    <p className="b3">
                      Student: <a href="#">John Due</a>
                    </p>
                  </th>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <p className="b3">8</p>
                  </td>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Pass
                    </span>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0" />
                      </a>
                      <a
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="b3 mb--5">December 26, 2022</p>
                    <span className="h6 mb--5">
                      Write a short essay on yourself using the 5
                    </span>
                    <p className="b3">
                      Student: <a href="#">John Due</a>
                    </p>
                  </th>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <p className="b3">8</p>
                  </td>
                  <td>
                    <p className="b3">4</p>
                  </td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Fail
                    </span>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0" />
                      </a>
                      <a
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizAttempts;

const ValueContainer = ({ children, ...props }) => {
  const { getValue, hasValue } = props;
  const nbValues = getValue().length;
  if (!hasValue) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }
  return (
    <components.ValueContainer {...props}>
      {`${nbValues} items selected`}
    </components.ValueContainer>
  );
};

const MultiValue = (props) => {
  return "3 Selected";
};
