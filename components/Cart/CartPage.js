"use client";

import Link from "next/link";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";

import CartItems from "./CartItems";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, total_amount, shipping_fee } = useSelector(
    (state) => state.CartReducer
  );

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="cart_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="cart-table table-responsive mb--60">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Image</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Quantity</th>
                        <th className="pro-subtotal">Total</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return <CartItems key={item.id} {...item} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </form>

              <div className="row g-5">
                <div className="col-lg-6 col-12">
                  <div className="calculate-shipping edu-bg-shade">
                    <div className="section-title text-start">
                      <h4 className="title mb--30">Calculate Shipping</h4>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6 col-12 mb--25">
                          <div className="rbt-modern-select bg-transparent height-45">
                            <select className="w-100">
                              <option>Bangladesh</option>
                              <option>China</option>
                              <option>country</option>
                              <option>India</option>
                              <option>Japan</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb--25">
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
                        <div className="col-md-6 col-12 mb--25">
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                        <div className="col-md-6 col-12 mb--25">
                          <Link
                            className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Estimate</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="discount-coupon edu-bg-shade">
                    <div className="section-title text-start">
                      <h4 className="title mb--30">Discount Coupon Code</h4>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6 col-12 mb--25">
                          <input type="text" placeholder="Coupon Code" />
                        </div>
                        <div className="col-md-6 col-12 mb--25">
                          <button className="rbt-btn btn-gradient hover-icon-reverse btn-sm">
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Apply Code</span>
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
                  </div>
                </div>

                <div className="col-lg-5 offset-lg-1 col-12">
                  <div className="cart-summary">
                    <div className="cart-summary-wrap">
                      <div className="section-title text-start">
                        <h4 className="title mb--30">CartPage Summary</h4>
                      </div>
                      <p>
                        Sub Total <span>${total_amount}.00</span>
                      </p>
                      <p>
                        Shipping Cost <span>${shipping_fee}.00</span>
                      </p>
                      <h2>
                        Grand Total
                        <span>${total_amount + shipping_fee}.00</span>
                      </h2>
                    </div>

                    <div className="cart-submit-btn-group">
                      <div className="single-button w-50">
                        <Link
                          href="/checkout"
                          className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100 text-center"
                        >
                          <span data-text="Checkout">Checkout</span>
                        </Link>
                      </div>
                      <div className="single-button w-50">
                        <button className="rbt-btn rbt-switch-btn rbt-switch-y w-100 btn-border">
                          <span data-text="Update CartPage">
                            Update CartPage
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
