"use client";

import Link from "next/link";
import Image from "next/image";

import CourseData from "../../../data/course-details/courseData.json";
import { useAppContext } from "@/context/Context";

const Search = () => {
  const { search } = useAppContext();

  return (
    <>
      <div className={`rbt-search-dropdown ${!search ? "active" : ""}`}>
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <input type="text" placeholder="What are you looking for?" />
                <div className="submit-btn">
                  <Link className="rbt-btn btn-gradient btn-md" href="#">
                    Search
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="rbt-separator-mid">
            <hr className="rbt-separator m-0" />
          </div>

          <div className="row g-4 pt--30 pb--60">
            <div className="col-lg-12">
              <div className="section-title">
                <h5 className="rbt-title-style-2">Our Top Course</h5>
              </div>
            </div>

            {CourseData.courseDetails.slice(0, 4).map((data, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href={`/course-details/${data.id}`}>
                      <Image
                        src={data.courseImg}
                        width={186}
                        height={128}
                        alt="Card image"
                      />
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <a href={`/course-details/${data.id}`}>
                        {data.courseTitle}
                      </a>
                    </h5>
                    <div className="rbt-review">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="rating-count">
                        ({data.review} Reviews)
                      </span>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$15</span>
                        <span className="off-price">$25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
