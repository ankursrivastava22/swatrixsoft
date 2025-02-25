import React from "react";

const ComntForm = () => {
  return (
    <>
      <div className="comment-respond">
        <h4 className="title">Post a Comment</h4>
        <form action="#">
          <p className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
            Required fields are marked <span className="required">*</span>
          </p>
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
              <p className="comment-form-cookies-consent">
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
              <a
                className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                href="#"
              >
                <span className="btn-text">Post Comment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ComntForm;
