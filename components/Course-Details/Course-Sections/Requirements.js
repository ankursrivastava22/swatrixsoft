import React from "react";

const Requirements = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">{checkMatchCourses.title}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {checkMatchCourses.detailsList.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {item.listItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Requirements;
