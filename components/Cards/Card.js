import Image from "next/image";
import Link from "next/link";

import CourseDetails from "../../data/course-details/courseData.json";

const Card = ({ start, end, col, mt, isDesc, isUser }) => {
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(start, end).map((data, index) => (
          <div
            className={`${col} ${mt}`}
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                  {data.offPrice > 0 ? (
                    <div className="rbt-badge-3 bg-white">
                      <span>-{data.offPrice}%</span>
                      <span>Off</span>
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-card-top">
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
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" title="Bookmark" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                <h4 className="rbt-card-title">
                  <Link href={`/course-details/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>

                <ul className="rbt-meta">
                  <li>
                    <i className="feather-book"></i>
                    {data.lesson} Lessons
                  </li>
                  <li>
                    <i className="feather-users"></i>
                    {data.student} Students
                  </li>
                </ul>
                {isDesc ? <p className="rbt-card-text">{data.desc}</p> : ""}
                {isUser ? (
                  <div className="rbt-author-meta mb--10">
                    <div className="rbt-avater">
                      <Link href={`/profile/${data.id}`}>
                        <Image
                          src={data.userImg}
                          width={33}
                          height={33}
                          alt="Sophia Jaymes"
                        />
                      </Link>
                    </div>
                    <div className="rbt-author-info">
                      By
                      <Link href={`/profile/${data.id}`}>{data.userName}</Link>
                      In <Link href="#">{data.userCategory}</Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  {data.button ? (
                    <Link
                      className="rbt-btn-link left-icon"
                      href={`/course-details/${data.id}`}
                    >
                      <i className="feather-shopping-cart"></i> Add To Cart
                    </Link>
                  ) : (
                    <Link
                      className="rbt-btn-link"
                      href={`/course-details/${data.id}`}
                    >
                      Learn More<i className="feather-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
