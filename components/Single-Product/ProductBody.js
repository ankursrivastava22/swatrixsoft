"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useAppContext } from "@/context/Context";
import { addToCartAction, toggleAmount } from "@/redux/action/CartAction";
import { useDispatch, useSelector } from "react-redux";

const ProductBody = ({ product }) => {
  const { cartToggle, setCart } = useAppContext();

  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [qty, setQty] = useState(1);

  const addToCartFun = (id, qty, product) => {
    dispatch(addToCartAction(id, qty, product));
    setCart(!cartToggle);
  };

  const increasePrice = () => {
    dispatch(toggleAmount(product.id, "inc"));
    setQty(qty + 1);
  };

  const decreasePrice = () => {
    dispatch(toggleAmount(product.id, "dec"));
    setQty((prevQty) => {
      const newQty = prevQty - 1;
      return newQty < 1 ? 1 : newQty;
    });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart, product]);

  const getProductForUpdateQty = cart.find((prod) => prod.id === product.id);

  return (
    <>
      <div className="row g-5 row--30 align-items-center">
        <div className="col-lg-6">
          <div className="thumbnail">
            <Image
              className="w-100 radius-10"
              src={product.courseImg && product.courseImg}
              width={623}
              height={747}
              alt="Product Images"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content">
            <div className="rbt-review justify-content-start">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-count">
                ({product.rating}) - 100% Positive Reviews
              </span>
            </div>

            <h2 className="title mt--10 mb--10">{product.title}</h2>
            <span className="rbt-label-style description">
              By: {product.productBy}
            </span>

            <div className="rbt-price justify-content-start mt--10">
              <span className="current-price theme-gradient">
                ${product.price}.00
              </span>
              <span className="off-price">${product.offPrice}.00</span>
            </div>

            <p className="mt--20">{product.desc}</p>

            <div className="product-action mb--20">
              <div className="pro-qty">
                <span className="dec qtybtn" onClick={decreasePrice}>
                  -
                </span>
                <span>
                  {getProductForUpdateQty && getProductForUpdateQty.amount
                    ? getProductForUpdateQty.amount
                    : qty}
                </span>
                <span className="inc qtybtn" onClick={increasePrice}>
                  +
                </span>
              </div>

              <div className="addto-cart-btn">
                <a
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="#"
                  onClick={() => addToCartFun(product.id, qty, product)}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Add To Cart</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <ul className="product-feature">
              <li>
                <span>SKU:</span> {product.sku}
              </li>
              <li>
                <span>Categories: </span> <a href="#">{product.categories}</a>
              </li>
              <li>
                <span>Tag: </span>
                {product &&
                  product.tag.map((list, i) => (
                    <a className="me-2" href="#" key={i}>
                      {list}
                    </a>
                  ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBody;
