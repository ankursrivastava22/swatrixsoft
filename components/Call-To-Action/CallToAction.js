"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import CallToActionData from "../../data/elements/calltoaction.json";

const CallToAction = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <div className="container">
      {CallToActionData &&
        CallToActionData.collectionOne.map((data, index) => (
          <div className="row g-5" key={index}>
            {data.left.map((item, innerIndex) => (
              <div className="col-lg-6" key={innerIndex}>
                <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-5">
                      <div className="inner">
                        <div className="rbt-category mb--20">
                          <Link href="#">{item.tag}</Link>
                        </div>
                        <h4 className="title mb--15">{item.title}</h4>
                        <p className="mb--15">{item.desc}</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-7">
                      <div className="video-popup-wrapper mt_lg--10 mt_md--20 mt_sm--20">
                        <Image
                          className="w-100 rbt-radius"
                          src={item.img}
                          width={319}
                          height={229}
                          alt="Video Images"
                        />
                        <Link
                          className="rbt-btn rounded-player-2 sm-size popup-video position-to-top with-animation"
                          data-vbtype="video"
                          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                          controls
                        >
                          <span className="play-icon"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {data.right.map((item, innerIndex) => (
              <div className="col-lg-6" key={innerIndex}>
                <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="inner">
                        <div className="rbt-category mb--20">
                          <Link href="#">{item.tag}</Link>
                        </div>
                        <h4 className="title mb--10">{item.title}</h4>
                        <p className="mb--15">{item.desc}</p>
                        <div className="read-more-btn">
                          <Link
                            className="rbt-btn rbt-switch-btn btn-gradient btn-sm"
                            href="#"
                          >
                            <span data-text="Join Now">Join Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CallToAction;
