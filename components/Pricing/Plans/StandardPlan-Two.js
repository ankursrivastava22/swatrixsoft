import Image from "next/image";
import Link from "next/link";
import React from "react";

const StandardPlanTwo = ({ item, parentClass, toggle }) => {
  const {
    title,
    badge,
    img,
    yearlyDuration,
    yearlyAmount,
    monthlyAmount,
    monthlyDuration,
    isActive,
    list
  } = item;
  return (
    <>
      <div
        className={`pricing-table ${parentClass} ${isActive ? "active" : ""}`}
      >
        <div className="icon-image text-center">
          <Image src={img} width={100} height={100} alt="Pricing Image Icons" />
        </div>
        <div className="pricing-header">
          <h3 className="title"> {title}</h3>
          <span className="rbt-badge mb--15">{badge}</span>
          <div className="price-wrap">
            <div className={`yearly-pricing ${toggle ? "d-none" : "d-block"}`}>
              <span className="amount">${yearlyAmount}</span>
              <span className="duration">/{yearlyDuration}</span>
            </div>
            <div className={`monthly-pricing ${toggle ? "d-block" : "d-none"}`}>
              <span className="amount">${monthlyAmount}</span>
              <span className="duration">/{monthlyDuration}</span>
            </div>
          </div>
        </div>
        <div className="pricing-body">
          <ul className="list-item">
            {list.map((item, innerIndex) => (
              <li key={innerIndex} className={`${item.isCheck ? "" : "off"}`}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-btn">
          <Link
            className="rbt-btn btn-gradient radius-round hover-icon-reverse w-100"
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
      </div>
    </>
  );
};

export default StandardPlanTwo;
