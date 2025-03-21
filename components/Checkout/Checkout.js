"use client";

import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart, total_amount, shipping_fee } = useSelector(
    (state) => state.CartReducer
  );

  // Track selected payment method; default set to "upi"
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Handle order placement
  const handlePlaceOrder = async () => {
    // Ensure terms & conditions are accepted
    if (!document.getElementById("accept_terms").checked) {
      alert("Please accept the terms & conditions");
      return;
    }

    if (paymentMethod === "upi") {
      // Prepare order data (you might want to generate a unique order ID and get customer info dynamically)
      const orderData = {
        orderId: "ORDER" + Date.now(),
        amount: total_amount + shipping_fee,
        customerId: "CUSTOMER123", // Replace with actual customer data
      };

      try {
        // Initiate payment by calling your API endpoint
        const response = await fetch("/api/paytm/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
        const data = await response.json();

        if (data.paytmParams) {
          // Create a form to submit the Paytm parameters
          const form = document.createElement("form");
          form.method = "post";
          form.action =
            process.env.NEXT_PUBLIC_PAYTM_ENV === "production"
              ? "https://securegw.paytm.in/order/process"
              : "https://securegw-stage.paytm.in/order/process";

          Object.keys(data.paytmParams).forEach((key) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = data.paytmParams[key];
            form.appendChild(input);
          });
          document.body.appendChild(form);
          form.submit();
        } else {
          alert("Failed to initiate payment");
        }
      } catch (error) {
        console.error("Error initiating payment", error);
        alert("Error initiating payment");
      }
    } else {
      // Handle other payment methods (e.g., Cash on Delivery) here
      alert(`Payment method "${paymentMethod}" selected. Proceeding with checkout.`);
    }
  };

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
                    Sub Total <span>${total_amount}.00</span>
                  </p>

                  <p>
                    Shipping Fee <span>${shipping_fee}.00</span>
                  </p>

                  <h4 className="mt--30">
                    Grand Total{" "}
                    <span>${total_amount + shipping_fee}.00</span>
                  </h4>
                </div>
              </div>

              <div className="col-12 mb--60">
                <h4 className="checkout-title">Payment Method</h4>
                <div
                  className="checkout-payment-method accordion rbt-accordion-style rbt-accordion-05 accordion"
                  id="accordionExamplea1"
                >
                  {/* UPI/Paytm Payment Option */}
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_upi"
                      name="payment-method"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                    />
                    <label htmlFor="payment_upi">UPI/Paytm Payment</label>
                  </div>

                  {/* Cash on Delivery Option */}
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_cash"
                      name="payment-method"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <label htmlFor="payment_cash">Cash on Delivery</label>
                  </div>

                  {/* Other payment methods can be added similarly */}
                  <div className="single-method">
                    <input type="checkbox" id="accept_terms" />
                    <label htmlFor="accept_terms">
                      I’ve read and accept the terms &amp; conditions
                    </label>
                  </div>
                </div>
                <div className="plceholder-button mt--50">
                  <button
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    onClick={handlePlaceOrder}
                  >
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
