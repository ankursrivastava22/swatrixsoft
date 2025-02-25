import AccordionData from "../../data/elements/accordion.json";

const AccordionThree = () => {
  return (
    <div className="container">
      {AccordionData.AccordionThree.map((data, index) => (
        <div className="row g-5 align-items-center" key={index}>
          <div className="col-lg-10 offset-lg-1">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-pink-opacity">{data.tag}</span>
                <h2 className="title">
                  {data.title} <br /> {data.subTitle}
                </h2>
                <p className="description has-medium-font-size mt--20">
                  <strong>{data.strong}</strong> {data.description}
                </p>
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
        </div>
      ))}
    </div>
  );
};

export default AccordionThree;
