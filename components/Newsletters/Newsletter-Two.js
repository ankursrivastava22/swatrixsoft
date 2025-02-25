"use client";

import dynamic from "next/dynamic";

import NewsletterData from "../../data/elements/newsletter.json";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const NewsletterTwo = () => {
  return (
    <div className="container">
      <div className="row row--15 align-items-center">
        <div className="col-lg-12">
          {NewsletterData &&
            NewsletterData.newsletterTwo.map((data, index) => (
              <div className="inner text-center" key={index}>
                <div className="section-title text-center">
                  <span className="subtitle bg-white-opacity">
                    {data.subTitle}
                  </span>
                  <h2 className="title color-white">
                    <strong>{data.strong}</strong> {data.title}
                  </h2>
                  <p className="description color-white mt--20">{data.desc}</p>
                </div>
                <form action="#" className="newsletter-form-1 mt--40">
                  <input type="email" placeholder="Enter Your E-Email" />
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Subscribe</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </form>
                <span className="note-text color-white mt--20">
                  {data.text}
                </span>

                <div className="row row--15 mt--50">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className={`col-lg-3 col-sm-6 col-md-6 single-counter ${
                        item.offset ? "offset-lg-3" : "single-counter"
                      }`}
                      key={innerIndex}
                    >
                      <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter color-white">
                              <span className="odometer">
                                <Odometer value={item.num} />
                              </span>
                            </h3>
                            <h5 className="title color-white">{item.title}</h5>
                            <span className="subtitle color-white">
                              {item.subTitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterTwo;
