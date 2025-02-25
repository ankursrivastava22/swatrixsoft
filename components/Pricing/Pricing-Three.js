import React from "react";

import PricingData from "../../data/elements/pricing.json";
import BasicPlan from "./Plans/BasicPlan";
import StandardPlan from "./Plans/StandardPlan";
import ExclusivePlan from "./Plans/ExclusivePlan";
import { useAppContext } from "@/context/Context";

const PricingThree = ({ title, tag, col, position }) => {
  const { pricingThree, setPricingThree } = useAppContext();

  return (
    <>
      {PricingData &&
        PricingData.pricingThree.map((data, index) => (
          <div className="container" key={index}>
            <div className="row g-5 mb--60">
              {title !== "" ? (
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="section-title text-start">
                    <span className="subtitle bg-pink-opacity">{tag}</span>
                    <h2 className="title">{title}</h2>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className={col}>
                <div className={`pricing-billing-duration ${position}`}>
                  <ul>
                    <li className="nav-item">
                      <button
                        className={`nav-link yearly-plan-btn ${
                          pricingThree ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setPricingThree(!pricingThree)}
                      >
                        {data.yearlyPlan}
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link monthly-plan-btn ${
                          !pricingThree ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setPricingThree(!pricingThree)}
                      >
                        {data.monthlyPlan}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.basicPlan.map((item, innerIndex) => (
                  <BasicPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.standardPlan.map((item, innerIndex) => (
                  <StandardPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.exclusivePlan.map((item, innerIndex) => (
                  <ExclusivePlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PricingThree;
