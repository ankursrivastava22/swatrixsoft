"use client";

import React, { useEffect } from "react";
import Link from "next/link";

// import Plyr from "plyr";
// import "plyr/dist/plyr.css";

import AboutData from "../../data/elements/about.json";

const AboutEight = () => {
  // useEffect(() => {
  //   new Plyr(".rbtplayer", {
  //     muted: false,
  //     volume: 1,
  //     controls: [
  //       "play-large",
  //       "play",
  //       "progress",
  //       "current-time",
  //       "mute",
  //       "volume",
  //       "fullscreen",
  //     ],
  //   });
  // }, []);

  return (
    <>
      {AboutData &&
        AboutData.aboutEight.map((data, index) => (
          <div className="row gy-5 align-items-center row--30" key={index}>
            <div className="col-lg-7">
              <div className="content radius-6 overflow-hidden">
                <div className="plyr__video-embed rbtplayer">
                  <iframe
                    className="radius-6 overflow-hidden"
                    src="https://www.youtube.com/embed/qKzhrXqT6oE"
                    allowFullScreen
                    allow="autoplay"
                    width={636}
                    height={414}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner">
                <div className="section-title text-start">
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <div className="read-more-btn mt--40">
                    <Link
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                      href="#"
                    >
                      <span data-text="About Histudy">About Histudy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutEight;
