import React from "react";

import AccordionData from "../../data/elements/accordion.json";

const Faq = () => {
  return (
    <>
      <div className="container">
        {AccordionData.AccordionThree.map((data, index) => (
          <div className="row g-5" key={index}>
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title">Purchases & Refunds</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="accordionExamplec3">
                    {data.faqBody.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={item.heading}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.collapse}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={item.collapse}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent="#accordionExamplec3"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title">Making Courses</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="faqs-accordionExamplec3">
                    {data.faqBody2.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={`faq-${item.heading}`}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={`faq-${item.collapse}`}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={`faq-${item.collapse}`}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={`faq-${item.heading}`}
                          data-bs-parent="#faqs-accordionExamplec3"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
