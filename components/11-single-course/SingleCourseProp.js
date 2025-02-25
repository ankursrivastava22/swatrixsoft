import Image from "next/image";
import React from "react";
import CourseSlider from "./CourseSlider";

export default function SingleCourseProp({ courseData, image }) {
  return (
    <>
      <div className="col-lg-12">
        {courseData.map((data, index) => (
          <div className="modern-course-features-box h-100" key={index}>
            {data.certificateOne.map((innerData, innerIndex) => (
              <div className="inner" key={innerIndex}>
                <div className="thumbnail">
                  <Image
                    src={image ? innerData.img : innerData.imgTwo}
                    width={604}
                    height={408}
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <span className="rbt-badge-6 bg-secondary-opacity">
                    {innerData.tag}
                  </span>
                  <h2 className="title mt--10">{innerData.title}</h2>
                  <p>{innerData.desc}</p>
                  <ul className="course-feature-list">
                    {innerData.list.map((list, i) => (
                      <li key={i}>
                        <div className="icon">
                          <Image
                            src={list.icon}
                            width={40}
                            height={40}
                            alt="Icon Image"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="featute-title">
                            {list.num}K+ <span>{list.text}</span>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        {courseData.map((data, index) => (
          <div
            className="modern-course-features-box one-colume-grid h-100"
            key={index}
          >
            {data.certificateTwo.map((innerData, innerIndex) => (
              <div className="inner" key={innerIndex}>
                <div className="thumbnail">
                  <Image
                    src={image ? innerData.img : innerData.imgTwo}
                    width={558}
                    height={397}
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <h2 className="title">{innerData.title}</h2>
                  <p>{innerData.desc}</p>
                  <ul className="course-feature-list">
                    {innerData.list.map((list, i) => (
                      <li key={i}>
                        <div className="icon">
                          <Image
                            src={list.icon}
                            width={40}
                            height={40}
                            alt="Icon Image"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="featute-title">
                            {list.num}K+ <span>{list.text}</span>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        <div className="modern-course-features-box grid-content-reverse h-100">
          {courseData.map((data, index) => (
            <div className="inner" key={index}>
              <CourseSlider {...data} course={data.courseImg} />
              {data.certificateThree.map((innerData, innerIndex) => (
                <div className="content" key={innerIndex}>
                  <h2 className="title">{innerData.title}</h2>
                  <p>{innerData.desc}</p>
                  <ul className="rbt-list-style-2 flex-wrap">
                    {innerData.list.map((innerData, i) => (
                      <li key={i}>
                        <i className="feather-check"></i>
                        {innerData.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
