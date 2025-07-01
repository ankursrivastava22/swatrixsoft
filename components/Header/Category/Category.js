// components/Category/Category.js
"use client";

import React from "react";
import CategoryData from "@/data/elements/category";
import SingleCategory from "./CategoryProps/SingleCategory";

const titleMap = {
  categoryItemOne:   "Development & Design",
  categoryItemTwo:   "Mobile App Development",
  categoryItemThree: "AI Services",
  categoryItemFour:  "Solutions",
  categoryItemFive:  "QA Testing & Support",
  categoryItemSix:   "API Integration",
  categoryItemSeven: "Consulting & Strategy",
  categoryItemEight: "Digital Marketing Services",
};

export default function Category() {
  return (
    <div className="rbt-category-menu-wrapper rbt-category-update">
      <div className="rbt-category-btn">
        <div className="rbt-offcanvas-trigger md-size icon">
          <span className="d-none d-xl-block">
            <i className="feather-grid" />
          </span>
          <i title="Category" className="feather-grid d-block d-xl-none" />
        </div>
        <span className="category-text d-none d-xl-block">Category</span>
      </div>

      <div className="update-category-dropdown">
        <div className="inner">
          <ul className="dropdown-parent-wrapper">
            {Object.entries(CategoryData).map(([key, items]) => (
              <SingleCategory
                key={key}
                title={titleMap[key]}
                isActive={false}
                items={items}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
