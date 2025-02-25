import React from "react";
import Image from "next/image";

import contactImg from "../../public/images/about/contact-2.jpg";

const InstructorForm = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="thumbnail">
          <Image
            className="w-100 radius-10"
            src={contactImg}
            width={638}
            height={687}
            alt="Contact Images"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">
              EDUCATION FOR EVERYONE
            </span>
          </div>
          <h3 className="title">Get a Free Course You Can Contact With Me</h3>
          <form id="contact-form" className="w-100">
            <div className="form-group">
              <input name="con_name" type="text" />
              <label>Name</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input name="con_email" type="email" />
              <label>Email</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input type="text" />
              <label>Phone</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <textarea></textarea>
              <label>Message</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">GET IT NOW</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InstructorForm;
