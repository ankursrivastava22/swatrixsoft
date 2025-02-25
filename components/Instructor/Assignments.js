"use client";

import Link from "next/link";
import { useState } from "react";
import Select, { components } from "react-select";

const Assignments = () => {
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
            <h4 className="rbt-title-style-3">Assignments</h4>
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
                  <th>Assignment Name</th>
                  <th>Total Marks</th>
                  <th>Total Submit</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span className="h6 mb--5">
                      Write Link short essay on yourself using the 5
                    </span>
                    <p className="b3">
                      Course: <Link href="#">Fundamentals 101</Link>
                    </p>
                  </th>
                  <td>
                    <p className="b3">80</p>
                  </td>
                  <td>
                    <p className="b3">2</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <Link
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0"></i> Edit
                      </Link>
                      <Link
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">
                      Speaking Korean for Beginners
                    </span>
                    <p className="b3">
                      Course: <Link href="#">Speaking 101</Link>
                    </p>
                  </th>
                  <td>
                    <p className="b3">20</p>
                  </td>
                  <td>
                    <p className="b3">3</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <Link
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0"></i> Edit
                      </Link>
                      <Link
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">
                      Song Writing Techniques 101
                    </span>
                    <p className="b3">
                      Course: <Link href="#">Song Writing</Link>
                    </p>
                  </th>
                  <td>
                    <p className="b3">60</p>
                  </td>
                  <td>
                    <p className="b3">10</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <Link
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0"></i> Edit
                      </Link>
                      <Link
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">Arabic For Beginners</span>
                    <p className="b3">
                      Course: <Link href="#">Arabic Writing</Link>
                    </p>
                  </th>
                  <td>
                    <p className="b3">40</p>
                  </td>
                  <td>
                    <p className="b3">15</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <Link
                        className="rbt-btn btn-xs bg-primary-opacity radius-round"
                        href="#"
                        title="Edit"
                      >
                        <i className="feather-edit pl--0"></i> Edit
                      </Link>
                      <Link
                        className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                        href="#"
                        title="Delete"
                      >
                        <i className="feather-trash-2 pl--0"></i>
                      </Link>
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

export default Assignments;

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
