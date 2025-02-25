import Link from "next/link";

import Teacher from "../../data/pages/become-A-Teacher.json";
import InstructorRegistration from "./InstructorRegis";

const BecomeATeacher = () => {
  return (
    <>
      {Teacher &&
        Teacher.becomeATeacher.map((data, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-pink-opacity">{data.tag}</span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description has-medium-font-size mt--20 mb--40">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="row row row--30">
              <div className="col-lg-12 mt_md--40 mt_sm--40 order-2 order-lg-1">
                <div className="advance-tab-button">
                  <ul
                    className="nav nav-tabs tab-button-style-2"
                    id="myTab-4"
                    role="tablist"
                  >
                    {data.body.map((item, innerIndex) => (
                      <li role="presentation" key={innerIndex}>
                        <Link
                          href="#"
                          className={`tab-button ${
                            item.isActive ? "active" : ""
                          }`}
                          id={item.tab}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.target}`}
                          role="tab"
                          aria-controls={item.target}
                          aria-selected={item.isActive}
                        >
                          <span className="title">{item.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content advance-tab-content-style-2">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className={`tab-pane fade ${
                        item.isActive ? "active show" : ""
                      }`}
                      id={item.target}
                      role="tabpanel"
                      aria-labelledby={item.tab}
                      key={innerIndex}
                    >
                      <div className="content">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <InstructorRegistration />
          </div>
        ))}
    </>
  );
};

export default BecomeATeacher;
