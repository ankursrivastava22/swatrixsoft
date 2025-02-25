import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

const CourseTabTwo = ({ course, start, end }) => {
  const { toggle } = useAppContext();

  return (
    <>
      <div
        className={`rbt-course-grid-column ${
          !toggle ? "active-list-view" : ""
        }`}
      >
        {course.slice(start, end).map((data, index) => (
          <div className="course-grid-3" key={index}>
            <div
              className={`rbt-card variation-01 rbt-hover ${
                !toggle ? "card-list-2" : ""
              }`}
            >
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                  <div className="rbt-badge-3 bg-white">
                    <span>-{data.offPrice}%</span>
                    <span>Off</span>
                  </div>
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

                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  <Link
                    className="rbt-btn-link"
                    href={`/course-details/${data.id}`}
                  >
                    Learn More<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseTabTwo;
