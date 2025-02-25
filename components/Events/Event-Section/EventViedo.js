"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const EventViedo = ({ getEventData }) => {
  const { toggle, setToggle, cartToggle, setCart } = useAppContext();
  const [hideOnScroll, setHideOnScroll] = useState(false);

  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addToCartFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 250;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="inner">
        <Link
          className={`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${
            hideOnScroll ? "d-none" : ""
          }`}
          data-vbtype="video"
          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
        >
          <div className="video-content">
            {getEventData.eventImg && (
              <Image
                className="w-100 rbt-radius"
                src={getEventData.eventImg}
                width={355}
                height={255}
                alt="Video Images"
              />
            )}
            <div className="position-to-top">
              <span className="rbt-btn rounded-player-2 with-animation">
                <span className="play-icon"></span>
              </span>
            </div>
            <span className="play-view-text d-block color-white">
              <i className="feather-eye"></i> Preview this course
            </span>
          </div>
        </Link>

        <div className="content pt--30">
          <div className="add-to-card-button mb--15">
            <Link
              className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
              href="#"
              onClick={() =>
                addToCartFun(getEventData.id, amount, getEventData)
              }
            >
              <span className="btn-text">Add to Cart</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div className="buy-now-btn">
            <Link
              className="rbt-btn btn-border icon-hover w-100 d-block text-center"
              href="#"
            >
              <span className="btn-text">Book Now</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </Link>
          </div>

          <div
            className={`rbt-widget-details has-show-more ${
              !toggle ? "active" : ""
            }`}
          >
            <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
              {getEventData.roadmap.map((item, innerIndex) => (
                <li key={innerIndex}>
                  <span>{item.text}</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className={`rbt-show-more-btn ${!toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              Show More
            </div>
          </div>

          <div className="social-share-wrapper mt--30 text-center">
            <div className="rbt-post-share d-flex align-items-center justify-content-center">
              <ul className="social-icon social-default transparent-with-border justify-content-center">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="mt--20" />
            <div className="contact-with-us text-center">
              <p>For details about the course</p>
              <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                <i className="feather-phone mr--5"></i> Call Us:
                <Link href="#">
                  <strong>+444 555 666 777</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventViedo;
