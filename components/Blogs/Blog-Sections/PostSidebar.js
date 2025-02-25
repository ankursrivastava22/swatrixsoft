import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostSidebar = ({ title, sidebarData, isEvents, start, end }) => {
  return (
    <>
      <div className="rbt-single-widget rbt-widget-recent">
        <div className="inner">
          <h4 className="rbt-widget-title">{title}</h4>

          <ul className="rbt-sidebar-list-wrapper recent-post-list">
            {sidebarData &&
              sidebarData.slice(start, end).map((data, index) => (
                <li key={index}>
                  <div className="thumbnail">
                    <Link
                      href={`${
                        isEvents
                          ? `/event-details/${data.id}`
                          : `/blog-details/${data.slug}`
                      }`}
                    >
                      {isEvents ? (
                        <Image
                          src={data.img}
                          width={355}
                          height={240}
                          priority
                          alt="Card image"
                        />
                      ) : (
                        <Image
                          src={data.thumbnail.large}
                          width={1085}
                          height={645}
                          priority
                          alt="Card image"
                        />
                      )}
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link
                        href={`${
                          isEvents
                            ? `/event-details/${data.id}`
                            : `/blog-details/${data.slug}`
                        }`}
                      >
                        {data.title}
                      </Link>
                    </h6>
                    <ul className="rbt-meta">
                      {isEvents ? (
                        <li>
                          <i className="feather-clock"></i>
                          {data.badgeDate} {data.badgeYear}
                        </li>
                      ) : (
                        <li>
                          <i className="feather-clock"></i>
                          {data.publishedAt}
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostSidebar;
