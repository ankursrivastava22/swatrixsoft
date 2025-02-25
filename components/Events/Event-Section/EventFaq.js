import React from "react";

const EventFaq = ({ eventParentClass, getEventData }) => {
  return (
    <>
      <div className="course-content rbt-shadow-box mt--60">
        <div className="section-title">
          <h4 className="title mb--0">Event FAQ</h4>
        </div>
        <div className={eventParentClass}>
          <div className="accordion" id="accordionExampleb2">
            {getEventData.eventFaq.map((data, index) => (
              <div className="accordion-item card" key={index}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${index}`}
                >
                  <button
                    className={`accordion-button ${
                      !data.collapsed ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo1${index}`}
                    aria-expanded={`${data.expand}`}
                    aria-controls={`collapseTwo1${index}`}
                  >
                    {data.title}
                  </button>
                </h2>
                <div
                  id={`collapseTwo1${index}`}
                  className={`accordion-collapse collapse ${
                    data.isShow ? "show" : ""
                  }`}
                  aria-labelledby={`headingTwo${index}`}
                  data-bs-parent="#accordionExampleb2"
                >
                  <div className="accordion-body card-body">
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventFaq;
