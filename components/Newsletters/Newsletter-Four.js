import NewsletterData from "../../data/elements/newsletter.json";

const NewsletterFour = () => {
  return (
    <>
      {NewsletterData &&
        NewsletterData.newsletterFour.map((data, index) => (
          <div className="section-title text-center" key={index}>
            <h2 className="title">
              {data.title} <br /> {data.subTitle}
            </h2>
            <form action="#" className="newsletter-form-1 mt--50 radius-round">
              <input
                className="rbt-border"
                type="email"
                placeholder="Enter Your E-Email"
              />
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round"
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
        ))}
    </>
  );
};

export default NewsletterFour;
