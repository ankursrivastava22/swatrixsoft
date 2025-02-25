import AboutData from "../../data/elements/about.json";

const AboutFour = () => {
  return (
    <>
      {AboutData &&
        AboutData.aboutFour.map((data, index) => (
          <div className="row g-5 align-items-start" key={index}>
            <div className="col-lg-4">
              <div className="content">
                <h2
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="700"
                >
                  {data.title}
                </h2>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <p>{data.desc}</p>
            </div>
            <div
              className="col-lg-4"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <p>{data.descTwo}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutFour;
