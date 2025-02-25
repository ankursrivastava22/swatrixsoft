import React from "react";

const CheckoutForm = () => {
  return (
    <>
      <div className="col-lg-7">
        <div className="checkout-content-wrapper">
          <div id="billing-form">
            <h4 className="checkout-title">Billing Address</h4>

            <div className="row">
              <div className="col-md-6 col-12 mb--20">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Email Address*</label>
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Phone no*</label>
                <input type="text" placeholder="Phone number" />
              </div>

              <div className="col-12 mb--20">
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" />
              </div>

              <div className="col-12 mb--20">
                <label>Address*</label>
                <input type="text" placeholder="Address line 1" />
                <input type="text" placeholder="Address line 2" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Country*</label>
                <div className="rbt-modern-select bg-transparent height-45">
                  <select className="w-100">
                    <option>Dhaka</option>
                    <option>Barisal</option>
                    <option>Khulna</option>
                    <option>Comilla</option>
                    <option>Chittagong</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Town/City*</label>
                <input type="text" placeholder="Town/City" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>State*</label>
                <input type="text" placeholder="State" />
              </div>

              <div className="col-md-6 col-12 mb--20">
                <label>Zip Code*</label>
                <input type="text" placeholder="Zip Code" />
              </div>

              <div className="col-12 mb--20">
                <div className="check-box">
                  <input type="checkbox" id="create_account" />
                  <label htmlFor="create_account">Create an Acount?</label>
                </div>
                <div className="check-box">
                  <input type="checkbox" id="shiping_address" data-shipping />
                  <label htmlFor="shiping_address">
                    Ship to Different Address
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div id="shipping-form" className="mt--20">
            <h4 className="checkout-title">Shipping Address</h4>
            <div className="row g-5">
              <div className="col-md-6 col-12">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" />
              </div>

              <div className="col-md-6 col-12">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="col-md-6 col-12">
                <label>Email Address*</label>
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="col-md-6 col-12">
                <label>Phone no*</label>
                <input type="text" placeholder="Phone number" />
              </div>

              <div className="col-12">
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" />
              </div>

              <div className="col-12">
                <label>Address*</label>
                <input type="text" placeholder="Address line 1" />
                <input type="text" placeholder="Address line 2" />
              </div>

              <div className="col-md-6 col-12">
                <label>Country*</label>
                <div className="rbt-modern-select bg-transparent height-45">
                  <select className="w-100">
                    <option>Dhaka</option>
                    <option>Barisal</option>
                    <option>Khulna</option>
                    <option>Comilla</option>
                    <option>Chittagong</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <label>Town/City*</label>
                <input type="text" placeholder="Town/City" />
              </div>

              <div className="col-md-6 col-12">
                <label>State*</label>
                <input type="text" placeholder="State" />
              </div>

              <div className="col-md-6 col-12">
                <label>Zip Code*</label>
                <input type="text" placeholder="Zip Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
