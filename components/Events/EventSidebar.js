"use client";

import React, { useState, useEffect } from "react";

import EventData from "../../data/events.json";
import Image from "next/image";
import Link from "next/link";

const EventSidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
        <div
          className={`rbt-single-widget rbt-widget-categories has-show-more ${
            toggle ? "active" : ""
          }`}
        >
          <div className="inner">
            <h4 className="rbt-widget-title">Categories</h4>
            <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
              {EventData &&
                EventData.events.map((data, index) => (
                  <li className="rbt-check-group" key={index}>
                    <input
                      id={`cat-list-${index + 1}`}
                      type="checkbox"
                      name={`cat-list-${index + 1}`}
                    />
                    <label htmlFor={`cat-list-${index + 1}`}>
                      {data.category}
                      <span className="rbt-lable count">{index + 15}</span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
          <div
            className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            Show More
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-recent">
          <div className="inner">
            <h4 className="rbt-widget-title">Recent Events</h4>
            <ul className="rbt-sidebar-list-wrapper recent-post-list">
              {EventData &&
                EventData.events.slice(0, 4).map((data, index) => (
                  <li key={index}>
                    <div className="thumbnail">
                      <Link href={`/event-details/${data.id}`}>
                        <Image
                          src={data.img}
                          width={241}
                          height={163}
                          alt="Event Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href={`/event-details/${data.id}`}>
                          {data.title}
                        </Link>
                      </h6>
                      <ul className="rbt-meta">
                        <li>
                          <i className="feather-clock"></i>
                          {data.time}
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="rbt-single-widget rbt-widget-tag">
          <div className="inner">
            <h4 className="rbt-widget-title">Event Tags</h4>
            <div className="rbt-sidebar-list-wrapper rbt-tag-list">
              {EventData &&
                EventData.events.map((data, index) => (
                  <Link key={index} href="#">
                    {data.tag}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default EventSidebar;
