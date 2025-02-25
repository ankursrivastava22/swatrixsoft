import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../data/course-details/courseData.json";

const CategoryFive = () => {
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(0, 4).map((item, innerIndex) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
            <div className="rbt-cat-box rbt-cat-box-1 variation-5 text-start">
              <div className="inner">
                <div className="thumbnail">
                  <Link href={`/course-filter-one-toggle/${item.category}`}>
                    <Image
                      src={item.cateBigImg}
                      width={304}
                      height={166}
                      alt="Category Images"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href={`/course-filter-one-toggle/${item.category}`}>
                      {item.category}
                    </Link>
                  </h5>
                  <div className="read-more-btn">
                    <Link href={`/course-filter-one-toggle/${item.category}`}>
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoryFive;
