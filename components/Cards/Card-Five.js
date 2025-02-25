"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import CardData from "../../data/elements/card";

const CardFive = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      {CardData &&
        CardData.cardFive.map((data, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-03 rbt-hover">
              <div className="rbt-card-img">
                <Link className="thumbnail-link" href={data.link}>
                  <Image
                    src={data.img}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                  <span className="rbt-btn btn-white icon-hover">
                    <span className="btn-text">Read More</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <Link href={data.link}>{data.title}</Link>
                </h5>
                <div className="rbt-card-bottom">
                  <Link className="transparent-button" href={data.link}>
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            strokeLinecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardFive;
