// components/Category/CategoryProps/SingleCategory.js
"use client";

import Link from "next/link";

export default function SingleCategory({ title, items = [], isActive }) {
  // slugify the title: "Development & Design" → "development-and-design"
  const slug = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return (
    <li className={`dropdown-parent-list ${isActive ? "active" : ""}`}>
      {/* Parent link – no nested <a> */}
      <Link href={`/${slug}`} className="parent-link">
        {title}
      </Link>

      {/* Child items */}
      <div className="dropdown-child-wrapper">
        <div className="child-inner">
          {items.map((item, idx) => (
            <div className="dropdown-child-list" key={idx}>
              {/* Child link – again, no <a> */}
              <Link href={item.link}>
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
