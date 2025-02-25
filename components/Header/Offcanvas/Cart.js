"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { deleteProduct } from "@/redux/action/CartAction";

const Cart = () => {
  const router = useRouter();
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const dispatch = useDispatch();
  const { cart, total_amount } = useSelector((state) => state.CartReducer);

  const { cartToggle, setCart } = useAppContext();

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));

    if (path === "/cart") {
      setCart(true);
    }
  }, [cart, path]);

  return (
    <>
      <div className={`${!cartToggle ? "cart-sidenav-menu-active" : ""}`}>
        <div
          className={`rbt-cart-side-menu ${
            !cartToggle ? "side-menu-active" : ""
          }`}
        >
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="content">
                <div className="title">
                  <h4 className="title mb--0">Your shopping cart</h4>
                </div>
                <div className="rbt-btn-close" id="btn_sideNavClose">
                  <button
                    className="minicart-close-button rbt-round-btn"
                    onClick={() => setCart(!cartToggle)}
                  >
                    <i className="feather-x"></i>
                  </button>
                </div>
              </div>
            </div>
            <nav className="side-nav w-100">
              <div className="rbt-minicart-wrapper">
                {cart &&
                  cart.map((data, index) => (
                    <li className="minicart-item" key={index}>
                      <div className="thumbnail">
                        <Link
                          href={
                            data.product.title
                              ? `/event-details/${data.id}`
                              : `/course-details/${data.id}`
                          }
                        >
                          <Image
                            src={
                              data.product.courseImg || data.product.eventImg
                            }
                            width={80}
                            height={64}
                            alt="Product Images"
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6 className="title">
                          <Link
                            href={
                              data.product.title
                                ? `/event-details/${data.id}`
                                : `/course-details/${data.id}`
                            }
                          >
                            {data.product.courseTitle || data.product.title}
                          </Link>
                        </h6>

                        <span className="quantity">
                          {data.amount} *
                          <span className="price">${data.product.price}</span>
                        </span>
                      </div>
                      <div className="close-btn">
                        <button
                          className="rbt-round-btn"
                          onClick={() => dispatch(deleteProduct(data.id))}
                        >
                          <i className="feather-x"></i>
                        </button>
                      </div>
                    </li>
                  ))}
              </div>
            </nav>

            <div className="rbt-minicart-footer">
              <hr className="mb--0" />
              <div className="rbt-cart-subttotal">
                <p className="subtotal">
                  <strong>Subtotal:</strong>
                </p>
                <p className="price">${total_amount}</p>
              </div>
              <hr className="mb--0" />
              <div className="rbt-minicart-bottom mt--20">
                <div className="view-cart-btn">
                  <Link
                    className="rbt-btn btn-border icon-hover w-100 text-center"
                    href="/cart"
                  >
                    <span className="btn-text">View Cart</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="checkout-btn mt--20">
                  <Link
                    className="rbt-btn btn-gradient icon-hover w-100 text-center"
                    href="/checkout"
                  >
                    <span className="btn-text">Checkout</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="close_side_menu"
          href="#"
          onClick={() => setCart(!cartToggle)}
        ></Link>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
