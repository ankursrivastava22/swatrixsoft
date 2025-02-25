"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Pagination from "../Common/Pagination";

const Events = ({
  getEvents,
  parentClass,
  childClass,
  isPagination,
  start,
  end,
}) => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;

  const getSelectedEvent = events.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setEvents(getEvents.events);
    setTotalPages(Math.ceil(getEvents.events.length / 6));
  }, [setTotalPages, setEvents]);

  return (
    <>
      <div className="row g-5">
        {getSelectedEvent.slice(start, end).map((data, index) => (
          <div className={`${childClass}`} key={index}>
            <div className={`rbt-card ${parentClass} variation-01 rbt-hover`}>
              <div className="rbt-card-img">
                <Link href={`/event-details/${data.id}`}>
                  <Image
                    src={data.img}
                    width={355}
                    height={240}
                    priority
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
                  <Link href={`/event-details/${data.id}`}>
                    {data.title}
                  </Link>
                </h4>

                <div className="read-more-btn">
                  <Link
                    className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                    href={`/event-details/${data.id}`}
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

      {isPagination ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination
              totalPages={totalPages}
              pageNumber={page}
              handleClick={handleClick}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Events;
