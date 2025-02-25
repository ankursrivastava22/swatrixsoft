import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../data/course-details/courseData.json";

const CategorySeven = () => {
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(0, 8).map((item, innerIndex) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
            <Link
              className="rbt-cat-box rbt-cat-box-1 image-overlaping-content"
              href={`/course-filter-one-toggle/${item.category}`}
            >
              <div className="inner">
                <div className="thumbnail">
                  <Image
                    src={item.cateBigImg}
                    width={300}
                    height={300}
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h5 className="title">{item.category}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};
export default CategorySeven;
