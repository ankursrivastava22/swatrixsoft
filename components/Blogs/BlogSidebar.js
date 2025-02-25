"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Pagination from "../Common/Pagination";
import Sidebar from "./Blog-Sections/Sidebar";

const BlogSidebar = ({ blogdata }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 5;
  const selectedBlogs = blogs.slice(startIndex, startIndex + 5);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getBlogs = () => {
      setBlogs(blogdata);
      setTotalPages(Math.ceil(blogdata.length / 5));
    };

    getBlogs();
  }, [setBlogs, setTotalPages, 5]);

  return (
    <>
      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row row--30 gy-5">
            <div className="col-lg-8">
              <div className="row g-5">
                {blogdata &&
                  selectedBlogs.slice(1, 5).map((data, index) => (
                    <div className="col-lg-6 col-md-6 col-12" key={index}>
                      <div className="rbt-blog-grid rbt-card variation-02 rbt-hover">
                        <div className="rbt-card-img">
                          <Link href={`/post-format-standard/${data.slug}`}>
                            <Image
                              src={data.thumbnail.large}
                              width={1085}
                              height={645}
                              priority
                              alt="Card image"
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body">
                          <h5 className="rbt-card-title">
                            <Link href={`/post-format-standard/${data.slug}`}>
                              {data.title}
                            </Link>
                          </h5>

                          <ul className="blog-meta">
                            <li>
                              <i className="feather-user"></i> admin
                            </li>
                            <li>
                              <i className="feather-clock"></i> August 3, 2023
                            </li>
                            <li>
                              <i className="feather-watch"></i> 1 min read
                            </li>
                          </ul>
                          <p className="rbt-card-text">{data.desc}</p>
                          <div className="rbt-card-bottom">
                            <Link
                              className="transparent-button"
                              href={`/post-format-standard/${data.slug}`}
                            >
                              Learn More
                              <i>
                                <svg
                                  width="17"
                                  height="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    stroke="#27374D"
                                    fill="none"
                                    fillRule="evenodd"
                                  >
                                    <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                    <path
                                      strokeLinecap="square"
                                      d="M.663 5.572h14.594"
                                    />
                                  </g>
                                </svg>
                              </i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="row">
                <div className="col-lg-12 mt--60">
                  <Pagination
                    totalPages={totalPages}
                    pageNumber={page}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar sideBlogs={blogdata} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
