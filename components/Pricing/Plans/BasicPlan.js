import Link from "next/link";

const BasicPlan = ({ item, parentClass, styleType, toggle }) => {
  const {
    title,
    badge,
    yearlyDuration,
    yearlyAmount,
    monthlyAmount,
    monthlyDuration,
    isActive,
    list,
    isPrimary,
    isSecondary,
    isPink,
  } = item;

  return (
    <div className={`pricing-table ${parentClass} ${isActive ? "active" : ""}`}>
      <div className="pricing-header">
        <h3
          className={`title ${
            isPrimary
              ? "color-primary"
              : isSecondary
              ? "color-secondary"
              : isPink
              ? "color-pink"
              : ""
          }`}
        >
          {title}
        </h3>
        <span className="rbt-badge mb--35">{badge}</span>
        <div className="price-wrap">
          <div className={`yearly-pricing ${toggle ? "d-none" : "d-block"}`}>
            <span
              className={`amount ${
                isPrimary
                  ? "color-primary"
                  : isSecondary
                  ? "color-secondary"
                  : isPink
                  ? "color-pink"
                  : ""
              }`}
            >
              ${yearlyAmount}
            </span>
            <span
              className={`duration ms-1 ${
                isPrimary
                  ? "color-primary"
                  : isSecondary
                  ? "color-secondary"
                  : isPink
                  ? "color-pink"
                  : ""
              }`}
            >
              /{yearlyDuration}
            </span>
          </div>
          <div className={`monthly-pricing ${toggle ? "d-block" : "d-none"}`}>
            <span
              className={`amount ${
                isPrimary
                  ? "color-primary"
                  : isSecondary
                  ? "color-secondary"
                  : isPink
                  ? "color-pink"
                  : ""
              }`}
            >
              ${monthlyAmount}.00
            </span>
            <span
              className={`duration ms-1 ${
                isPrimary
                  ? "color-primary"
                  : isSecondary
                  ? "color-secondary"
                  : isPink
                  ? "color-pink"
                  : ""
              }`}
            >
              /{monthlyDuration}
            </span>
          </div>
        </div>
      </div>
      {styleType === "two" ? (
        <div className="pricing-btn">
          <Link
            className={`rbt-btn ${
              !isActive ? "bg-primary-opacity" : ""
            } hover-icon-reverse w-100`}
            href="#"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">Join Course Plan</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      {styleType === "three" ? (
        <div className="pricing-btn">
          <Link
            className={`rbt-btn ${
              isPrimary
                ? "bg-primary-opacity"
                : isSecondary
                ? "bg-secondary-opacity"
                : isPink
                ? "bg-pink-opacity"
                : ""
            } hover-icon-reverse w-100`}
            href="#"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">Join Course Plan</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="pricing-body">
        <ul className="list-item">
          {list.map((item, innerIndex) => (
            <li key={innerIndex} className={`${item.isCheck ? "" : "off"}`}>
              <i className={`feather-${item.isCheck ? "check" : "x"}`}></i>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      {styleType === "one" ? (
        <div className="pricing-btn">
          <Link
            className={`rbt-btn ${
              !isActive ? "bg-primary-opacity" : ""
            } hover-icon-reverse w-100`}
            href="#"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">Join Course Plan</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BasicPlan;
