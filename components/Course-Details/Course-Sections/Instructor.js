import Image from "next/image";
import Link from "next/link";
import React from "react";

const Instructor = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="about-author border-0 pb--0 pt--0">
        <div className="section-title mb--30">
          <h4 className="rbt-title-style-3">{checkMatchCourses.title}</h4>
        </div>
        {checkMatchCourses.body.map((teacher, innerIndex) => (
          <div className="media align-items-center" key={innerIndex}>
            <div className="thumbnail">
              <Link href={`/profile/${teacher.id}`}>
                <Image
                  src={teacher.img}
                  width={250}
                  height={250}
                  alt="Author Images"
                />
              </Link>
            </div>
            <div className="media-body">
              <div className="author-info">
                <h5 className="title">
                  <Link
                    className="hover-flip-item-wrapper"
                    href={`/profile/${teacher.id}`}
                  >
                    {teacher.name}
                  </Link>
                </h5>
                <span className="b3 subtitle">{teacher.type}</span>
                <ul className="rbt-meta mb--20 mt--10">
                  <li>
                    <i className="fa fa-star color-warning"></i>
                    {teacher.ratingNumber} Reviews
                    <span className="rbt-badge-5 ml--5">
                      {teacher.star} Rating
                    </span>
                  </li>
                  <li>
                    <i className="feather-users"></i> {teacher.studentNumber}
                    Students
                  </li>
                  <li>
                    <Link href="#">
                      <i className="feather-video"></i> {teacher.course} Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="content">
                <p className="description">{teacher.desc}</p>

                <ul className="social-icon social-default icon-naked justify-content-start">
                  {teacher.social.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <i className={`feather-${social.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;
