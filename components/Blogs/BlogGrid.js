"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import BlogGridTop from "./Blog-Sections/BlogGrid-Top";
import Pagination from "../Common/Pagination";

const BlogGrid = ({ isPagination, blogdata, top, start, end }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 10;
  const selectedGridBlogs = blogs.slice(startIndex, startIndex + 10);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setBlogs(blogdata);
    setTotalPages(Math.ceil(blogdata.length / 10));
  }, [setTotalPages, setBlogs]);
  return (
    <>
      {top ? (
        <BlogGridTop
          BlogData={blogdata}
          selectedGridBlogs={selectedGridBlogs}
        />
      ) : (
        ""
      )}

      <div className="row g-5 mt--15">
        {blogdata &&
          selectedGridBlogs.slice(start, end).map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link href={`/blog-details/${data.slug}`}>
                    <Image
                      src={data.thumbnail.large}
                      width={450}
                      height={267}
                      priority
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link href={`/blog-details/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h5>
                  <p className="rbt-card-text">{data?.desc}</p>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      href={`/blog-details/${data.slug}`}
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

export default BlogGrid;
