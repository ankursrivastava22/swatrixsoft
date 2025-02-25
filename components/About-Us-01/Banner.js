import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <div className="section-title mb--20">
                <span className="subtitle bg-coral-opacity">How We Work</span>
              </div>
              <h1 className="title display-one text-white">
                Take Challenge for Build Your Life. <br />
                The World Most Lessons for Back to Your Life.
              </h1>
              <div className="read-more-btn mt--40">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">More About Us</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
