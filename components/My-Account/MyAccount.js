import Link from "next/link";
import React from "react";
import AccountForm from "./AccountForm";

const MyAccount = ({ account }) => {
  return (
    <>
      <div className="tab-content" id="myaccountContent">
        <div
          className="tab-pane fade active show"
          id="dashboad"
          role="tabpanel"
        >
          {account.dashboard.map((info, index) => (
            <div className="rbt-my-account-inner" key={index}>
              <h3>Dashboard</h3>

              <div className="about-address mb--20">
                <p>
                  Hello, <strong>{info.name}</strong> (If Not
                  <Link href="/login" className="logout ms-2">
                    Logout
                  </Link>
                  )
                </p>
              </div>

              <p>{info.desc}</p>
            </div>
          ))}
        </div>

        <div className="tab-pane fade" id="orders" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Orders</h3>

            <div className="rbt-my-account-table table-responsive text-center">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {account.orders.map((info, index) => (
                    <tr key={index}>
                      <td>{info.id}</td>
                      <td>{info.name}</td>
                      <td>{info.date}</td>
                      <td>{info.status}</td>
                      <td>${info.price}</td>
                      <td>
                        <Link className="rbt-btn btn-gradient btn-sm" href="#">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="download" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Downloads</h3>

            <div className="rbt-my-account-table table-responsive text-center">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Expire</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {account.downloads.map((info, index) => (
                    <tr key={index}>
                      <td>{info.name}</td>
                      <td>{info.date}</td>
                      <td>{info.expire ? "Yes" : "Never"}</td>
                      <td>
                        <Link className="rbt-btn btn-gradient btn-sm" href="#">
                          Download File
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="payment-method" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Payment Method</h3>

            <p className="rbt-saved-message">
              You Can&apos;t Saved Your Payment Method yet.
            </p>
          </div>
        </div>

        <div className="tab-pane fade" id="address-edit" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Billing Address</h3>

            <address>
              <p>
                <strong>Banani, Dhaka</strong>
              </p>
              <p>
                1205 Supper Market
                <br />
                Dhaka, Bangladesh
              </p>
              <p>Mobile: 01911111111</p>
            </address>

            <div className="rbt-link-hover">
              <Link href="#" className="d-inline-block">
                <i className="fa fa-edit mr--5"></i>Edit Address
              </Link>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="account-info" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Account Details</h3>
            <AccountForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
