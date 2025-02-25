import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostSidebar from "./PostSidebar";

import EventData from "../../../data/events.json";

const Sidebar = ({ sideBlogs }) => {
  return (
    <>
      <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
        <div className="rbt-single-widget rbt-widget-search">
          <div className="inner">
            <form action="#" className="rbt-search-style-1">
              <input type="text" placeholder="Search Courses" />
              <button className="search-btn">
                <i className="feather-search"></i>
              </button>
            </form>
          </div>
        </div>

        <PostSidebar
          title="Recent Post"
          sidebarData={sideBlogs}
          start={0}
          end={4}
        />
        <PostSidebar
          title="Popular Post"
          sidebarData={EventData.events}
          isEvents={true}
          start={0}
          end={4}
        />

        <div className="rbt-single-widget rbt-widget-tag">
          <div className="inner">
            <h4 className="rbt-widget-title">Tags</h4>
            {sideBlogs &&
              sideBlogs.slice(0, 1).map((data, index) => (
                <div
                  className="rbt-sidebar-list-wrapper rbt-tag-list"
                  key={index}
                >
                  {data.tags.map((item, i) => (
                    <Link key={i} href="#">
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
