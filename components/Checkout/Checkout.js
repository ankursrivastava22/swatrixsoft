"use client";

import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart, total_amount, shipping_fee } = useSelector(
    (state) => state.CartReducer
  );

  return (
    <>
      <div className="container">
        <div className="row g-5 checkout-form">
          <CheckoutForm />

          <div className="col-lg-5">
            <div className="row pl--50 pl_md--0 pl_sm--0">
              <div className="col-12 mb--60">
                <h4 className="checkout-title">Cart Total</h4>

                <div className="checkout-cart-total">
                  <h4>
                    Product <span>Total</span>
                  </h4>

                  <ul>
                    {cart.map((data, index) => (
                      <li key={index}>
                        {data.product.courseTitle || data.product.title}
                        <span>${data.product.price * data.amount}.00</span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    Sub Total
                    <span>${total_amount}.00</span>
                  </p>

                  <p>
                    Shipping Fee <span>${shipping_fee}.00</span>
                  </p>

                  <h4 className="mt--30">
                    Grand Total <span>${total_amount + shipping_fee}.00</span>
                  </h4>
                </div>
              </div>

              <div className="col-12 mb--60">
                <h4 className="checkout-title">Payment Method</h4>
                <div
                  className="checkout-payment-method accordion rbt-accordion-style rbt-accordion-05 accordion"
                  id="accordionExamplea1"
                >
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_check"
                      name="payment-method"
                      value="check"
                    />
                    <label
                      htmlFor="payment_check"
                      data-bs-toggle="collapse"
                      data-bs-target="#payment"
                      aria-expanded="true"
                      aria-controls="payment"
                    >
                      Check Payment
                    </label>
                    <div
                      className="accordion-collapse collapse"
                      id="payment"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </div>
                    </div>
                  </div>

                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_bank"
                      name="payment-method"
                      value="bank"
                    />
                    <label
                      htmlFor="payment_bank"
                      data-bs-toggle="collapse"
                      data-bs-target="#bank"
                      aria-expanded="true"
                      aria-controls="bank"
                    >
                      Direct Bank Transfer
                    </label>
                    <div
                      className="accordion-collapse collapse"
                      id="bank"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </div>
                    </div>
                  </div>

                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_cash"
                      name="payment-method"
                      value="cash"
                    />
                    <label
                      htmlFor="payment_cash"
                      data-bs-toggle="collapse"
                      data-bs-target="#cash"
                      aria-expanded="true"
                      aria-controls="cash"
                    >
                      Cash on Delivery
                    </label>
                    <div
                      className="accordion-collapse collapse"
                      id="cash"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </div>
                    </div>
                  </div>

                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_paypal"
                      name="payment-method"
                      value="paypal"
                    />
                    <label
                      htmlFor="payment_paypal"
                      data-bs-toggle="collapse"
                      data-bs-target="#paypal"
                      aria-expanded="true"
                      aria-controls="paypal"
                    >
                      Paypal
                    </label>
                    <div
                      className="accordion-collapse collapse"
                      id="paypal"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </div>
                    </div>
                  </div>

                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_payoneer"
                      name="payment-method"
                      value="payoneer"
                    />
                    <label
                      htmlFor="payment_payoneer"
                      data-bs-toggle="collapse"
                      data-bs-target="#payoneer"
                      aria-expanded="true"
                      aria-controls="payoneer"
                    >
                      Payoneer
                    </label>
                    <div
                      className="accordion-collapse collapse"
                      id="payoneer"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </div>
                    </div>
                  </div>

                  <div className="single-method">
                    <input type="checkbox" id="accept_terms" />
                    <label htmlFor="accept_terms">
                      I’ve read and accept the terms & conditions
                    </label>
                  </div>
                </div>
                <div className="plceholder-button mt--50">
                  <button className="rbt-btn btn-gradient hover-icon-reverse">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Place order</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
