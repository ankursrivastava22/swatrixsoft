import React from "react";

const EventContent = ({ getEventData }) => {
  return (
    <>
      <div className="row g-5">
        <div className="col-lg-12">
          <div className="section-title">
            <h4 className="title mb--0">Event Content</h4>
          </div>
        </div>

        <div className="col-lg-6">
          <ul className="rbt-list-style-1">
            {getEventData.eventContent.slice(0, 4).map((item, innerIndex) => (
              <li key={innerIndex}>
                <i className="feather-check"></i>
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-6">
          <ul className="rbt-list-style-1">
            {getEventData.eventContent.slice(4, 8).map((item, innerIndex) => (
              <li key={innerIndex}>
                <i className="feather-check"></i>
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EventContent;
