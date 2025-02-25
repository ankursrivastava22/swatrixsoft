import Image from "next/image";

import AccordionData from "../../data/elements/accordion.json";

const Accordion = () => {
  return (
    <>
      {AccordionData &&
        AccordionData.accordion.map((data, index) => (
          <div className="container" key={index}>
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">
                    {data.title} <br /> {data.subTitle}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail rbt-image-gallery-1 mb--80">
                  <Image
                    className="image-1 rbt-radius"
                    src={data.imgOne}
                    width={408}
                    height={500}
                    alt="Education Images"
                  />
                  <Image
                    className="image-2 rbt-radius"
                    src={data.imgTwo}
                    width={408}
                    height={500}
                    alt="Education Images"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt_md--40 mt_sm--40">
                <div className="rbt-accordion-style rbt-accordion-01  accordion">
                  <div className="accordion" id="accordionExamplea1">
                    {data.accordionBody.map((item, innerIndex) => (
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
                          data-bs-parent="#accordionExamplea1"
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
    </>
  );
};

export default Accordion;
