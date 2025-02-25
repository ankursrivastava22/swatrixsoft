import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarEvent = ({ getEventData }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mb--40">
          <div className="section-title text-start">
            <span className="subtitle bg-secondary-opacity">Similar Event</span>
            <h2 className="title">Similar Event</h2>
          </div>
        </div>
      </div>

      <div className="row g-5">
        {getEventData.eventSimilar.map((data, index) => (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card event-grid-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <Link href={`/event-details/${index + 1}`}>
                  <Image
                    src={data.eventImg}
                    width={355}
                    height={240}
                    alt="Card image"
                  />
                  <div className="rbt-badge-3 bg-white">
                    <span>{data.badgeDate}</span>
                    <span>{data.badgeYear}</span>
                  </div>
                </Link>
              </div>
              <div className="rbt-card-body">
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-map-pin"></i>
                    {data.location}
                  </li>
                  <li>
                    <i className="feather-clock"></i>
                    {data.time}
                  </li>
                </ul>
                <h4 className="rbt-card-title">
                  <Link href={`/event-details/${index + 1}`}>{data.title}</Link>
                </h4>

                <div className="read-more-btn">
                  <Link
                    className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                    href={`/event-details/${index + 1}`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Ticket</span>
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
        ))}
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="load-more mt--60 text-center">
            <Link className="rbt-btn rbt-switch-btn btn-border" href="#">
              <span data-text="View More Events">View More Events</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarEvent;
