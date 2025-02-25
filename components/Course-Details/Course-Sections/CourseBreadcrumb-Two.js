import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumbTwo = ({ getMatchCourse }) => {
  return (
    <>
      <div className="col-lg-8 offset-lg-2">
        <div className="content text-center">
          <div className="d-flex align-items-center flex-wrap justify-content-center mb--15 rbt-course-details-feature">
            <div className="feature-sin best-seller-badge">
              <span className="rbt-badge-2">
                <span className="image">
                  {getMatchCourse.awardImg && (
                    <Image
                      src={getMatchCourse.awardImg}
                      width={30}
                      height={30}
                      alt="Best Seller Icon"
                    />
                  )}
                </span>
                {getMatchCourse.sellsType}
              </span>
            </div>
            <div className="feature-sin rating">
              <Link href="#">{getMatchCourse.star}</Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
            </div>
            <div className="feature-sin total-rating">
              <Link className="rbt-badge-4" href="#">
                {getMatchCourse.ratingNumber} rating
              </Link>
            </div>
            <div className="feature-sin total-student">
              <span>{getMatchCourse.studentNumber} students</span>
            </div>
          </div>
          <h2 className="title theme-gradient">{getMatchCourse.courseTitle}</h2>

          <div className="rbt-author-meta mb--20 justify-content-center">
            <div className="rbt-avater">
              <Link href={`/profile/${getMatchCourse.id}`}>
                {getMatchCourse.userImg && (
                  <Image
                    width={40}
                    height={40}
                    src={getMatchCourse.userImg}
                    alt={getMatchCourse.userName}
                  />
                )}
              </Link>
            </div>
            <div className="rbt-author-info">
              By
              <Link href={`/profile/${getMatchCourse.id}`}>
                {getMatchCourse.userName}
              </Link>
              In <Link href="#">{getMatchCourse.userCategory}</Link>
            </div>
          </div>

          <ul className="rbt-meta">
            <li>
              <i className="feather-calendar"></i>Last updated
              {getMatchCourse.date}
            </li>
            <li>
              <i className="feather-globe"></i>
              {getMatchCourse.language}
            </li>
            <li>
              <i className="feather-award"></i>
              {getMatchCourse.courseAward}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumbTwo;
