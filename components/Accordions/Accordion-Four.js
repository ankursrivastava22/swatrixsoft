import Image from "next/image";

import AccordionData from "../../data/elements/accordion.json";

const AccordionFour = () => {
  return (
    <>
      {AccordionData &&
        AccordionData.AccordionFour.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start">
                  <span className="subtitle bg-pink-opacity">{data.tag}</span>
                  <h2 className="title">
                    {data.title} <br /> {data.subTitle}
                  </h2>
                  <p className="description has-medium-font-size mt--20 mb--40">
                    <strong>{data.strong}</strong> {data.description}
                  </p>
                </div>

                <div className="rbt-accordion-style rbt-accordion-05 accordion">
                  <div className="accordion" id="accordionExampleb4">
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
                          data-bs-parent="#accordionExampleb4"
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
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail rbt-image-gallery-1 mb--80 text-end">
                <Image
                  className="image-1 rbt-radius"
                  data-parallax='{"x": 0, "y": 30}'
                  src={data.imgOne}
                  width={448}
                  height={600}
                  alt="Education Images"
                />
                <Image
                  className="image-2 rbt-radius"
                  data-parallax='{"x": 0, "y": 80}'
                  src={data.imgTwo}
                  width={408}
                  height={500}
                  alt="Education Images"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AccordionFour;
