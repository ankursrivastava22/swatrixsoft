"use client";

import { useState } from "react";
import Select, { components } from "react-select";

const Announcement = () => {
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
            <h4 className="rbt-title-style-3">Announcements</h4>
          </div>

          <div className="rbt-callto-action rbt-cta-default style-2">
            <div className="content-wrapper overflow-hidden pt--30 pb--30 bg-color-primary-opacity">
              <div className="row gy-5 align-items-end">
                <div className="col-lg-8">
                  <div className="inner">
                    <div className="content text-left">
                      <h5 className="mb--5">Notify your all students.</h5>
                      <p className="b3">Create Announcement</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="call-to-btn text-start text-lg-end position-relative">
                    <a
                      className="rbt-btn btn-sm rbt-switch-btn rbt-switch-y"
                      href="#"
                    >
                      <span data-text="Add New Announcement">
                        Add New Announcement
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-dashboard-filter-wrapper mt--60">
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
                  <th>Date</th>
                  <th>Announcements</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span className="h6 mb--5">March 16, 2022</span>
                    <p className="b3">10.00am</p>
                  </th>
                  <td>
                    <span className="h6 mb--5">Announcement Title</span>
                    <p className="b3">Course: Fundamentals 101</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-edit"></i> Edit
                      </a>
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-trash-2"></i> Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">Janu 16, 2022</span>
                    <p className="b3">12.00am</p>
                  </th>
                  <td>
                    <span className="h6 mb--5">Web Design</span>
                    <p className="b3">Course: Web Design</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-edit"></i> Edit
                      </a>
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-trash-2"></i> Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">Janu 16, 2022</span>
                    <p className="b3">12.00am</p>
                  </th>
                  <td>
                    <span className="h6 mb--5">App Development</span>
                    <p className="b3">Course: App Development</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-edit"></i> Edit
                      </a>
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-trash-2"></i> Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="h6 mb--5">Janu 16, 2022</span>
                    <p className="b3">12.00am</p>
                  </th>
                  <td>
                    <span className="h6 mb--5">Announcement Title</span>
                    <p className="b3">Course: Web Design</p>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-edit"></i> Edit
                      </a>
                      <a className="rbt-btn-link left-icon" href="#">
                        <i className="feather-trash-2"></i> Delete
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

export default Announcement;

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
