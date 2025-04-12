import Link from "next/link";

const SingleCategory = ({ title, CategoryData, CategoryNum, isActive }) => {
  // Convert the title to a URL-friendly slug, e.g. "Web Development" => "web-development"
  const slug = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

  return (
    <li className={`dropdown-parent-list ${isActive ? "active" : ""}`}>
      {/* Each category now links to its own route: /web-development, /mobile-app-development, etc. */}
      <Link href={`/${slug}`}>
        {title}
      </Link>
      
      <div className="dropdown-child-wrapper">
        <div className="child-inner">
          {CategoryData &&
            CategoryNum.map((cate, index) => (
              <div className="dropdown-child-list" key={index}>
                <Link href={cate.link}>{cate.text}</Link>
              </div>
            ))}
        </div>
      </div>
    </li>
  );
};

export default SingleCategory;
