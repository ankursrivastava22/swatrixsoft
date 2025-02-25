import React from "react";

const EventDescription = ({ getEventData }) => {
  return (
    <>
      <div className="row g-5">
        <div className="col-lg-12">
          <div className="section-title">
            <h4 className="title mb--20">Event Description</h4>
          </div>
          <p>{getEventData.desc}</p>
          <p>{getEventData.descTwo}</p>
        </div>

        <div className="col-lg-6">
          <div className="section-title">
            <h4 className="title mb--20">Description</h4>
          </div>
          <ul className="rbt-list-style-1">
            {getEventData.eventDescription.map((item, innerIndex) => (
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

export default EventDescription;
