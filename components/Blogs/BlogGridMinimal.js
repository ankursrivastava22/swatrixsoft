"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Pagination from "../Common/Pagination";

const BlogGridMinimal = ({ isPagination,blogdata, start, end }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 9;
  const selectedGridBlogs = blogs.slice(startIndex, startIndex + 9);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setBlogs(blogdata);
    setTotalPages(Math.ceil(blogdata.length / 9));
  }, [setTotalPages, setBlogs]);
  return (
    <>
      <div className="row g-5">
        {blogdata &&
          selectedGridBlogs.slice(start, end).map((data, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
              key={index}
            >
              <div className="rbt-card variation-02 rbt-hover card-minimal">
                <div className="rbt-card-body">
                  <ul className="meta-list justify-content-start mb--30">
                    <li className="list-item">
                      <i className="feather-clock"></i>
                      <span>{data.publishedAt}</span>
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <Link href={`/post-format-gallery/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h4>
                  <div className="rbt-card-bottom mt--40">
                    <Link
                      className="transparent-button"
                      href={`/post-format-gallery/${data.slug}`}
                    >
                      Learn More
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
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

export default BlogGridMinimal;
