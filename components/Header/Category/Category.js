import Link from "next/link";
import CategoryData from "../../../data/elements/category";
import SingleCategory from "./CategoryProps/SingleCategory";

const Category = () => {
  return (
    <div className="rbt-category-menu-wrapper rbt-category-update">
      <div className="rbt-category-btn">
        <div className="rbt-offcanvas-trigger md-size icon">
          <span className="d-none d-xl-block">
            <i className="feather-grid"></i>
          </span>
          <i title="Category" className="feather-grid d-block d-xl-none"></i>
        </div>
        <span className="category-text d-none d-xl-block">Category</span>
      </div>

      <div className="update-category-dropdown">
        <div className="inner">
          <ul className="dropdown-parent-wrapper">
            <SingleCategory
              title="Course School"
              isActive={false}
              CategoryData={CategoryData}
              CategoryNum={CategoryData.categoryItemOne}
            />
            <SingleCategory
              title="Online School"
              isActive={false}
              CategoryData={CategoryData}
              CategoryNum={CategoryData.categoryItemTwo}
            />
            <SingleCategory
              title="kindergarten"
              isActive={false}
              CategoryData={CategoryData}
              CategoryNum={CategoryData.categoryItemThree}
            />
            <li className="dropdown-parent-list">
              <Link href="#">Classic LMS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Category;
