"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CourseWidget = ({
  data,
  courseStyle,
  showDescription,
  showAuthor,
  isProgress,
  isCompleted,
  isEdit,
}) => {
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [totalReviews, setTotalReviews] = useState("");
  const [rating, setRating] = useState("");

  const getDiscountPercentage = () => {
    let discount = data.coursePrice * ((100 - data.offerPrice) / 100);
    setDiscountPercentage(discount.toFixed(0));
  };

  const getTotalReviews = () => {
    let reviews =
      data.reviews.oneStar +
      data.reviews.twoStar +
      data.reviews.threeStar +
      data.reviews.fourStar +
      data.reviews.fiveStar;
    setTotalReviews(reviews);
  };

  const getTotalRating = () => {
    let ratingStar = data.rating.average;
    setRating(ratingStar.toFixed(0));
  };

  useEffect(() => {
    getDiscountPercentage();
    getTotalReviews();
    getTotalRating();
  });

  return (
    <>
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <Link href={`/course-details/${data.id}`}>
            <Image
              width={330}
              height={227}
              src={data.courseThumbnail}
              alt={data.title}
            />
            <div className="rbt-badge-3 bg-white">
              <span>{`-${discountPercentage}%`}</span>
              <span>Off</span>
            </div>
          </Link>
        </div>
        <div className="rbt-card-body">
          {courseStyle === "two" && (
            <>
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    {Array.from({ length: rating }, (_, i) => (
                      <i className="fas fa-star" key={i} />
                    ))}
                  </div>
                  <span className="rating-count">({totalReviews} Reviews)</span>
                </div>
                <div className="rbt-bookmark-btn">
                  <Link className="rbt-round-btn" title="Bookmark" href="#">
                    <i className="feather-bookmark" />
                  </Link>
                </div>
              </div>
              <h4 className="rbt-card-title">
                <Link href={`/course-details/${data.id}`}>{data.title}</Link>
              </h4>
            </>
          )}
          <ul className="rbt-meta">
            <li>
              <i className="feather-book" />
              {data.lectures} Lessons
            </li>
            <li>
              <i className="feather-users" />
              {data.enrolledStudent} Students
            </li>
          </ul>

          {isProgress ? (
            <>
              <div className="rbt-progress-style-1 mb--20 mt--10">
                <div className="single-progress">
                  <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                  {isCompleted ? (
                    <div className="progress">
                      <div
                        className="progress-bar wow fadeInLeft bar-color-success"
                        data-wow-duration="0.5s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        style={{ width: `100%` }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="rbt-title-style-2 progress-number">
                        100%
                      </span>
                    </div>
                  ) : (
                    <div className="progress">
                      <div
                        className="progress-bar wow fadeInLeft bar-color-success"
                        data-wow-duration="0.5s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        style={{ width: `${data.progressValue}%` }}
                        aria-valuenow={data.progressValue}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                      <span className="rbt-title-style-2 progress-number">
                        {data.progressValue}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="rbt-card-bottom">
                <Link
                  className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
                  href="#"
                >
                  Download Certificate
                </Link>
              </div>
            </>
          ) : (
            ""
          )}

          {courseStyle === "one" && (
            <h4 className="rbt-card-title">
              <Link href="#">{data.title}</Link>
            </h4>
          )}

          {showDescription ? (
            <p className="rbt-card-text">{data.shortDescription}</p>
          ) : (
            ""
          )}

          {courseStyle === "two" && showAuthor && (
            <div className="rbt-author-meta mb--20">
              <div className="rbt-avater">
                <Link href="components/widgets#">
                  <Image
                    width={40}
                    height={40}
                    src="/images/client/avater-01.png"
                    alt="Sophia Jaymes"
                  />
                </Link>
              </div>
              <div className="rbt-author-info">
                By <Link href="#">Patrick</Link> In
                <Link href="#">Languages</Link>
              </div>
            </div>
          )}

          {courseStyle === "one" && (
            <div className="rbt-review">
              <div className="rating">
                {Array.from({ length: rating }, (_, i) => (
                  <i className="fas fa-star" key={i} />
                ))}
              </div>
              <span className="rating-count"> ({totalReviews} Reviews)</span>
            </div>
          )}

          {!isProgress ? (
            <div className="rbt-card-bottom">
              <div className="rbt-price">
                <span className="current-price">${data.offerPrice}</span>
                <span className="off-price">${data.coursePrice}</span>
              </div>

              {isEdit ? (
                <Link className="rbt-btn-link left-icon" href="#">
                  <i className="feather-edit"></i> Edit
                </Link>
              ) : (
                <Link className="rbt-btn-link" href="#">
                  Learn More
                  <i className="feather-arrow-right" />
                </Link>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CourseWidget;
