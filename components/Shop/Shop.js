"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ShopData from "../../data/shop.json";

import ShopHead from "./ShopHead";
import Pagination from "../Common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "@/redux/action/CartAction";
import { useAppContext } from "@/context/Context";

const Shop = () => {
  const { cartToggle, setCart } = useAppContext();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = products.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====> Start ADD-To-Cart
  const addToCartFun = (id, qty, product) => {
    dispatch(addToCartAction(id, qty, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setProducts(ShopData.shop);
    setTotalPages(Math.ceil(products.length / 6));
  }, [setTotalPages, setProducts, getSelectedCourse]);

  return (
    <>
      <ShopHead shopProduct={ShopData} getSelectedCourse={getSelectedCourse} />

      <div className="rbt-shop-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            {ShopData &&
              getSelectedCourse.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="rbt-default-card style-three rbt-hover">
                    <div className="inner">
                      <div className="content pt--0 pb--10">
                        <h2 className="title">
                          <Link href={`/single-product/${data.id}`}>
                            {data.title}
                          </Link>
                        </h2>

                        <span className="team-form">
                          <span className="location">By {data.productBy}</span>
                        </span>
                      </div>
                      <div className="thumbnail">
                        <Link href={`/single-product/${data.id}`}>
                          <Image
                            src={data.courseImg}
                            width={355}
                            height={426}
                            alt="Histudy Book Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="rbt-review justify-content-center">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="rating-count">
                            ({data.rating}) - 100% Positive Reviews
                          </span>
                        </div>
                        <div className="rbt-price justify-content-center mt--10">
                          <span className="current-price theme-gradient">
                            ${data.price}.00
                          </span>
                          <span className="off-price">${data.offPrice}</span>
                        </div>
                        <div className="addto-cart-btn mt--20">
                          <Link
                            className="rbt-btn btn-gradient hover-icon-reverse"
                            href="#"
                            onClick={() => addToCartFun(data.id, qty, data)}
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row">
            <div className="col-lg-12 mt--60">
              <Pagination
                totalPages={totalPages}
                pageNumber={page}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
