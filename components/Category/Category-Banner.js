import Link from "next/link";

const CategoryBanner = ({ category }) => {
  return (
    <>
      <div className="rbt-banner-content-top">
        <div className="container">
          {category && (
            <div className="row">
              <div className="col-lg-12">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    {category && category.category
                      ? category.category
                      : "All Courses"}
                  </li>
                </ul>
                <div className=" title-wrapper">
                  <h1 className="title mb--0">
                    {category && category.category
                      ? category.category
                      : "All Courses"}
                  </h1>
                  <Link href="#" className="rbt-badge-2">
                    <div className="image">🎉</div>
                    {category && category.id} {category.length} Courses
                  </Link>
                </div>
                <p className="description">
                  {category && category.desc
                    ? category.desc
                    : "Courses that help beginner designers become true unicorns."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
