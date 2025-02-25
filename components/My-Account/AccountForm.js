import React from "react";

const AccountForm = () => {
  return (
    <>
      <div className="account-details-form">
        <form action="#">
          <div className="row g-5">
            <div className="col-lg-6 col-12">
              <input id="first-name" placeholder="First Name" type="text" />
            </div>

            <div className="col-lg-6 col-12">
              <input id="last-name" placeholder="Last Name" type="text" />
            </div>

            <div className="col-12">
              <input id="display-name" placeholder="Display Name" type="text" />
            </div>

            <div className="col-12">
              <input
                id="email-address"
                placeholder="Email Address"
                type="email"
              />
            </div>

            <div className="col-12">
              <h4>Password change</h4>
            </div>

            <div className="col-12">
              <input
                id="current-pwd"
                placeholder="Current Password"
                type="password"
              />
            </div>

            <div className="col-lg-6 col-12">
              <input id="new-pwd" placeholder="New Password" type="password" />
            </div>

            <div className="col-lg-6 col-12">
              <input
                id="confirm-pwd"
                placeholder="Confirm Password"
                type="password"
              />
            </div>

            <div className="col-12">
              <button className="rbt-btn btn-gradient icon-hover">
                <span className="btn-text">Save Changes</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountForm;
