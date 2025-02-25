import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumb = ({ getMatchCourse }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="content text-start">
          <ul className="page-list">
            <li className="rbt-breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className="icon-right">
                <i className="feather-chevron-right"></i>
              </div>
            </li>
            <li className="rbt-breadcrumb-item active">
              {getMatchCourse.category}
            </li>
          </ul>
          <h2 className="title">{getMatchCourse.courseTitle}</h2>
          <p className="description">{getMatchCourse.desc}</p>

          <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
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
              <span> {getMatchCourse.studentNumber} students</span>
            </div>
          </div>

          <div className="rbt-author-meta mb--20">
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
              <i className="feather-award"></i> {getMatchCourse.courseAward}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumb;
