import Link from "next/link";
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "../Instructor/Dashboard-Section/widgets/CourseWidget";

const EnrolledCourses = () => {
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Enrolled Courses</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="myTab-4"
              role="tablist"
            >
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button active"
                  id="home-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#home-4"
                  role="tab"
                  aria-controls="home-4"
                  aria-selected="true"
                >
                  <span className="title">Enrolled Courses</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button"
                  id="profile-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-4"
                  role="tab"
                  aria-controls="profile-4"
                  aria-selected="false"
                >
                  <span className="title">Active Courses</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button"
                  id="contact-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-4"
                  role="tab"
                  aria-controls="contact-4"
                  aria-selected="false"
                >
                  <span className="title">Completed Courses</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="home-4"
              role="tabpanel"
              aria-labelledby="home-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(0, 3)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-enrolled-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isProgress={true}
                      isCompleted={false}
                      isEdit={false}
                      showDescription={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="profile-4"
              role="tabpanel"
              aria-labelledby="profile-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(3, 6)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-active-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isCompleted={false}
                      isProgress={false}
                      isEdit={false}
                      showDescription={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="contact-4"
              role="tabpanel"
              aria-labelledby="contact-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(1, 4)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-completed-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isCompleted={true}
                      isProgress={true}
                      showDescription={false}
                      isEdit={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
