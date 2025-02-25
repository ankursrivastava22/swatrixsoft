import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";

const CategoryFour = () => {
  const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(0, 4).map((item, innerIndex) => {
          const count = categoryCounts[item.category] || 0;
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
              <div className="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href={`/course-filter-one-toggle/${item.category}`}>
                      <Image
                        src={item.cateBigImg}
                        width={304}
                        height={166}
                        alt="Category Images"
                      />
                      <div className="read-more-btn">
                        <span className="rbt-btn btn-sm btn-white radius-round">
                          {count} Course{count !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={`/course-filter-one-toggle/${item.category}`}>
                        {item.category}
                      </Link>
                    </h5>
                    <p className="description">{item.cateDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CategoryFour;
