import React from 'react'

const SingleCourseBanner = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="inner text-center ptb--80">
            <div className="section-title">
              <span className="subtitle bg-primary-opacity">
                Hello! Web Development Course
              </span>
            </div>
            <h2 className="title theme-gradient rbt-display-1">
              A Complete Guide to Web Development.
            </h2>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              perferendis, maiores?
            </p>

            <div className="rbt-single-course-meta text-center mt--20">
              <div className="enroll-btn mt--15">
                <a className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Enrol Course Now</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rbt-course-block mt--50 rbt-course-block rbt-shadow-box position-relative bg-primary-opacity">
              <div className="row align-items-center g-2 g-lg-5">
                <div className="col-lg-4 col-md-4 col-sm-6 text-start">
                  <ul className="rbt-meta">
                    <li className="color-primary">
                      <i className="feather-book"></i>12 Lessons
                    </li>
                    <li className="color-primary">
                      <i className="feather-users"></i>50 Students
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 text-center">
                  <div className="rbt-price large-size justify-content-start justify-content-lg-center">
                    <span className="current-price">$750.00</span>
                    <span className="off-price">$1500.00</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 text-end">
                  <div className="rbt-course-review">
                    <div className="rbt-review justify-content-start justify-content-lg-end">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="rating-count"> (105+ Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-circle-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCourseBanner