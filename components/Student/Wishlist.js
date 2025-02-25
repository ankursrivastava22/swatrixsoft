import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidget from "../Instructor/Dashboard-Section/widgets/CourseWidget";

const Wishlist = () => {
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Wishlist</h4>
          </div>
          <div className="row g-5">
            {Courses.slice(0, 6)?.map((slide, index) => (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={`course-wishlist-${index}`}
              >
                <CourseWidget
                  data={slide}
                  courseStyle="two"
                  isCompleted={false}
                  isProgress={false}
                  showDescription={false}
                  showAuthor={false}
                  isEdit={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
