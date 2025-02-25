import NewsletterData from "../../data/elements/newsletter.json";

const Newsletter = () => {
  return (
    <div className="container bg-gradient-5 newsletter-style-1">
      {NewsletterData &&
        NewsletterData.newsletterOne.map((data, index) => (
          <div className="row row--15 align-items-center" key={index}>
            <div className="col-lg-12 col-xl-7">
              <div className="inner">
                <div className="section-title text-center text-xl-start">
                  <span className="subtitle bg-secondary-opacity">
                    {data.subTitle}
                  </span>
                  <h2 className="title">
                    <strong>{data.strong}</strong> {data.title}
                  </h2>
                  <p className="description mt--20">{data.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-5 mt_lg--30 mt_md--30 mt_sm--30">
              <form action="#" className="newsletter-form-1">
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default Newsletter;
