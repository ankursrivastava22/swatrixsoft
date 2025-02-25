import Image from "next/image";
import Link from "next/link";

import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";

const CategoryThree = () => {
  const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(0, 4).map((item, innerIndex) => {
          const count = categoryCounts[item.category] || 0;
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
              <div className="rbt-cat-box rbt-cat-box-1 variation-2 text-center">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href={`/course-filter-one-toggle/${item.category}`}>
                      <Image
                        src={item.cateBigImg}
                        width={274}
                        height={150}
                        priority
                        alt="Category Images"
                      />
                    </Link>
                  </div>

                  <div className="icons">
                    <Image
                      src={item.cateSmallImg}
                      width={40}
                      height={40}
                      priority
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={`/course-filter-one-toggle/${item.category}`}>
                        {item.category}
                      </Link>
                    </h5>
                    <div className="read-more-btn">
                      <Link
                        className="rbt-btn-link"
                        href={`/course-filter-one-toggle/${item.category}`}
                      >
                        {count} Course{count !== 1 ? "s" : ""}
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CategoryThree;
