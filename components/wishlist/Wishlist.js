"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import BreadCrumb from "../Common/BreadCrumb";

import ShopData from "../../data/shop.json";

import { addToCartAction, toggleAmount } from "@/redux/action/CartAction";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);
  const [qty, setQty] = useState(1);

  const addToCartFun = (id, qty, product) => {
    dispatch(addToCartAction(id, qty, product));
    setCart(!cartToggle);
  };
  const increasePrice = () => {
    dispatch(toggleAmount(product.id, "inc"));
  };
  const decreasePrice = () => {
    dispatch(toggleAmount(product.id, "dec"));
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BreadCrumb title="Wishlist" text="Wishlist" />

      <div className="wishlist_area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="cart-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Image</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Quantity</th>
                        <th className="pro-subtotal">Action</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ShopData &&
                        ShopData.shop.map((data, index) => (
                          <tr key={index}>
                            <td className="pro-thumbnail">
                              <Link href="#">
                                <Image
                                  src={data.courseImg}
                                  width={144}
                                  height={168}
                                  alt="Product"
                                />
                              </Link>
                            </td>
                            <td className="pro-title">
                              <Link href="#">{data.title}</Link>
                            </td>
                            <td className="pro-price">
                              <span>${data.price}.00</span>
                            </td>
                            <td className="pro-quantity">
                              <div className="pro-qty">
                                <span
                                  className="dec qtybtn"
                                  //   onClick={decreasePrice}
                                >
                                  -
                                </span>
                                <span>
                                  <input type="text" defaultValue="1" />
                                </span>
                                <span
                                  className="inc qtybtn"
                                  //   onClick={increasePrice}
                                >
                                  +
                                </span>
                              </div>
                            </td>
                            <td className="pro-addtocart">
                              <button
                                className="rbt-btn btn-gradient"
                                onClick={() => addToCartFun(data.id, qty, data)}
                              >
                                add to cart
                              </button>
                            </td>
                            <td className="pro-remove">
                              <Link href="#">
                                <i className="feather-x"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
