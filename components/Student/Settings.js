"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Setting = () => {
  const [textareaText, setTextareaText] = useState(
    "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
  );

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Settings</h4>
          </div>

          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button"
                  id="password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <span className="title">Password</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button"
                  id="social-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#social"
                  role="tab"
                  aria-controls="social"
                  aria-selected="false"
                >
                  <span className="title">Social Share</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-245"></div>
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg position-relative">
                      <Image
                        width={300}
                        height={300}
                        src="/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                      <div className="rbt-edit-photo-inner">
                        <button className="rbt-edit-photo" title="Upload Photo">
                          <i className="feather-camera" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <Link
                        className="rbt-btn btn-sm btn-border color-white radius-round-10"
                        href="#"
                      >
                        Edit Cover Photo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname" type="text" defaultValue="John" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="text" defaultValue="Due" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="username">User Name</label>
                    <input id="username" type="text" defaultValue="johndue" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      id="phonenumber"
                      type="tel"
                      defaultValue="+1-202-555-0174"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="skill">Skill/Occupation</label>
                    <input
                      id="skill"
                      type="text"
                      defaultValue="Full Stack Developer"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="filter-select rbt-modern-select">
                    <label htmlFor="displayname" className="">
                      Display name publicly as
                    </label>
                    <select id="displayname" className="w-100">
                      <option>John Due</option>
                      <option>John</option>
                      <option>Due</option>
                      <option>Due John</option>
                      <option>johndue</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      cols="20"
                      rows="5"
                      value={textareaText}
                      onChange={(e) => setTextareaText(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="rbt-form-group">
                    <Link className="rbt-btn btn-gradient" href="#">
                      Update Info
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="currentpassword">Current Password</label>
                    <input
                      id="currentpassword"
                      type="password"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                      id="newpassword"
                      type="password"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="retypenewpassword">
                      Re-type New Password
                    </label>
                    <input
                      id="retypenewpassword"
                      type="password"
                      placeholder="Re-type New Password"
                    />
                  </div>
                </div>
                <div className="col-12 mt--10">
                  <div className="rbt-form-group">
                    <Link className="rbt-btn btn-gradient" href="#">
                      Update Password
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="social"
              role="tabpanel"
              aria-labelledby="social-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="facebook">
                      <i className="feather-facebook"></i> Facebook
                    </label>
                    <input
                      id="facebook"
                      type="text"
                      placeholder="https://facebook.com/"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="twitter">
                      <i className="feather-twitter"></i> Twitter
                    </label>
                    <input
                      id="twitter"
                      type="text"
                      placeholder="https://twitter.com/"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="linkedin">
                      <i className="feather-linkedin"></i> Linkedin
                    </label>
                    <input
                      id="linkedin"
                      type="text"
                      placeholder="https://linkedin.com/"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="website">
                      <i className="feather-globe"></i> Website
                    </label>
                    <input
                      id="website"
                      type="text"
                      placeholder="https://website.com/"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-form-group">
                    <label htmlFor="github">
                      <i className="feather-github"></i> Github
                    </label>
                    <input
                      id="github"
                      type="text"
                      placeholder="https://github.com/"
                    />
                  </div>
                </div>
                <div className="col-12 mt--10">
                  <div className="rbt-form-group">
                    <Link className="rbt-btn btn-gradient" href="#">
                      Update Profile
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
