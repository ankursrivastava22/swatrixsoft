import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../data/course-details/courseData.json";

const CategoryTen = () => {
  return (
    <>
      <ul className="row g-3 nav nav-tabs" id="myCategoryTab" role="tablist">
        {CourseDetails &&
          CourseDetails.courseDetails.slice(0, 6).map((item, innerIndex) => (
            <li
              className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12"
              key={innerIndex}
            >
              <Link
                className={`rbt-cat-box rbt-cat-box-1 image-overlaping-content with-image-content ${
                  item.isActiveCate ? "active" : ""
                }`}
                id={`cat-tab-${innerIndex}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#cat-tab-${innerIndex}`}
                role="tab"
                aria-controls={`cat-tab-${innerIndex}`}
                aria-selected={`${item.isActiveCate}`}
                href="#"
                key={innerIndex}
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
                    <div className="icons">
                      <Image
                        src={item.cateSmallImg}
                        width={30}
                        height={30}
                        alt="Icons Images"
                      />
                    </div>
                    <h5 className="title">{item.category}</h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      <div className="row mt--30">
        <div className="col-lg-12">
          <div className="tab-content" id="myCategoryTabContent">
            {CourseDetails &&
              CourseDetails.courseDetails.slice(0, 6).map((data, index) => (
                <div
                  className={`tab-pane fade show ${
                    data.isActiveCate ? "active" : ""
                  }`}
                  id={`cat-tab-${index}`}
                  role="tabpanel"
                  aria-labelledby={`cat-tab-${index}-tab`}
                  key={index}
                >
                  <div className="rbt-categori-list medium-size flex-wrap justify-content-center">
                    {data.subCategories.map((item, innerIndex) => (
                      <Link href="/course-filter-one-toggle" key={innerIndex}>
                        {item.cate}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTen;
