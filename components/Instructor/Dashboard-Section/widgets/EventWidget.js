"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const EventWidget = ({ event, widgetStyle = "card" }) => {
  const [eventDateMonth, setEventDateMonth] = useState(null);
  const [eventYear, setEventYear] = useState(null);

  useEffect(() => {
    const getDateMonth = () => {
      const date = new Date(event.startDate);
      setEventDateMonth(
        `${date.getDate()} ${date.toLocaleString("en-US", { month: "short" })}`
      );
    };

    const getEventDate = () => {
      const startDate = new Date(event.startDate);
      setEventYear(startDate.getFullYear());
    };

    getDateMonth();
    getEventDate();
  });

  return (
    <>
      {widgetStyle === "card" && (
        <div className="rbt-card event-grid-card variation-01 rbt-hover">
          <div className="rbt-card-img">
            <a href={`/event/${event.id}`}>
              <Image
                width={355}
                height={240}
                src={event.thumbnailImage}
                alt="Event image"
              />
              <div className="rbt-badge-3 bg-white">
                <span>{eventDateMonth}</span>
                <span>{eventYear}</span>
              </div>
            </a>
          </div>
          <div className="rbt-card-body">
            <ul className="rbt-meta">
              <li>
                <i className="feather-map-pin" />
                {event.location}
              </li>
              <li>
                <i className="feather-clock" />
                {event.startTime} - {event.endTime}
              </li>
            </ul>
            <h4 className="rbt-card-title text-truncate">
              <Link href={`/event/${event.id}`}>{event.title}</Link>
            </h4>
            <div className="read-more-btn">
              <Link
                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                href={`/event/${event.id}`}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Ticket</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {widgetStyle === "list" && (
        <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
          <div className="rbt-card-img">
            <a href={`/event/${event.id}`}>
              <Image
                width={355}
                height={240}
                src={event.thumbnailImage}
                alt="Event image"
              />
            </a>
          </div>
          <div className="rbt-card-body">
            <ul className="rbt-meta">
              <li>
                <i className="feather-calendar" />
                {event.startDate}
              </li>
              <li>
                <i className="feather-map-pin" />
                {event.location}
              </li>
            </ul>
            <h4 className="rbt-card-title">
              <a href={`/event/${event.id}`}>{event.title}</a>
            </h4>
            <div className="read-more-btn">
              <a
                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                href={`/event/${event.id}`}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Ticket</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventWidget;
