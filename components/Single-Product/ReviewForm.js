import React from "react";

const ReviewForm = () => {
  return (
    <>
      <form className="comment-form-style-1 position-relative" action="#">
        <p className="comment-note mb--20">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="notification-text d-flex align-items-center mb--30">
          <h6 className="mb--0 fontWeight600 title">Your Rating</h6>
          <div className="rbt-review justify-content-start">
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div className="row row--10">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="bl-email">Your Email</label>
              <input id="bl-email" type="email" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="website">Your Website</label>
              <input id="website" type="text" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="message">Leave a Reply</label>
              <textarea id="message" name="message"></textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="comment-form-cookies-consent mb--30">
              <input
                id="wp-comment-cookies-consent"
                name="wp-comment-cookies-consent"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="wp-comment-cookies-consent">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </p>
          </div>
          <div className="col-lg-12">
            <button className="rbt-btn btn-gradient hover-icon-reverse">
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Post Comment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
