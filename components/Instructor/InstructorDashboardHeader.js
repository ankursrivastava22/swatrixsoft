import Image from "next/image";

const InstructorDashboardHeader = () => {
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <Image
                width={300}
                height={300}
                src="/images/team/avatar.jpg"
                alt="Instructor"
              />
            </div>
            <div className="tutor-content">
              <h5 className="title">John Due</h5>
              <div className="rbt-review">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="rating-count"> (15 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Create a New Course</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardHeader;
