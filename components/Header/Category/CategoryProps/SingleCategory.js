import Link from "next/link";

const SingleCategory = ({ title, CategoryData, CategoryNum, isActive }) => {
  return (
    <li className={`dropdown-parent-list ${isActive ? "active" : ""}`}>
      <Link href="#">{title}</Link>
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
