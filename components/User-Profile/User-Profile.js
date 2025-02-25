import Image from "next/image";
import React from "react";

import bgImage from "../../public/images/bg/bg-image-22.jpg";

const UserProfile = ({ checkMatchProfile }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="rbt-dashboard-content-wrapper">
          <div className="tutor-bg-photo bg_image bg_image--22 height-350">
            <Image src={bgImage} alt="" />
          </div>

          {checkMatchProfile &&
            checkMatchProfile.courseInstructor.map((data, index) => (
              <div className="rbt-tutor-information" key={index}>
                {data.body.map((item, innerIndex) => (
                  <div className="rbt-tutor-information-left" key={innerIndex}>
                    <div className="thumbnail rbt-avatars size-lg">
                      <Image
                        src={item.img}
                        width={250}
                        height={250}
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">{item.name}</h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">
                          ({item.review} Reviews)
                        </span>
                      </div>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li>
                          <i className="feather-book"></i>
                          {item.course} Courses
                        </li>
                        <li>
                          <i className="feather-users"></i>
                          {item.studentNumber} Students
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
