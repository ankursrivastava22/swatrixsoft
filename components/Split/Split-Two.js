"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import SplitData from "../../data/elements/split.json";

const SplitTwo = ({ isImg }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      {SplitData &&
        SplitData.splitTwo.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="inner pr--50 pr_md--0 pr_sm--0">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--30">{data.desc}</p>
                  <div className="read-more-btn">
                    <a className="rbt-moderbt-btn" href="#">
                      <span className="moderbt-btn-text">
                        Learn More About Us
                      </span>
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {isImg ? (
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="video-popup-wrapper">
                  <Image
                    className="w-100 rbt-radius"
                    src={data.img}
                    width={638}
                    height={458}
                    alt="Video Images"
                  />
                </div>
              </div>
            ) : (
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="video-popup-wrapper">
                  <Image
                    className="w-100 rbt-radius"
                    src={data.imgTwo}
                    width={590}
                    height={424}
                    alt="Video Images"
                  />
                  <Link
                    className="popup-video position-to-top"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span>
                      <Image
                        src={data.imgIcon}
                        width={100}
                        height={70}
                        alt=""
                      />
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default SplitTwo;
