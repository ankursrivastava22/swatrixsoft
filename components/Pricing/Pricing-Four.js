import React from "react";

import { useAppContext } from "@/context/Context";
import PricingData from "../../data/elements/pricing.json";

import BasicPlanTwo from "./Plans/BasicPlan-Two";
import StandardPlanTwo from "./Plans/StandardPlan-Two";
import ExclusivePlanTwo from "./Plans/ExclusivePlan-Two";

const PricingFour = ({ title, tag }) => {
  const { pricingFour, setPricingFour } = useAppContext();

  return (
    <>
      {PricingData &&
        PricingData.pricingFour.map((data, index) => (
          <div className="container" key={index}>
            <div className="row g-5 mb--60">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title text-start">
                  <span className="subtitle bg-pink-opacity">{tag}</span>
                  <h2 className="title">{title}</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="pricing-billing-duration text-start text-md-end">
                  <ul>
                    <li className="nav-item">
                      <button
                        className={`nav-link yearly-plan-btn ${
                          pricingFour ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setPricingFour(!pricingFour)}
                      >
                        {data.yearlyPlan}
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link monthly-plan-btn ${
                          !pricingFour ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setPricingFour(!pricingFour)}
                      >
                        {data.monthlyPlan}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row gx-0">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.basicPlan.map((item, innerIndex) => (
                  <BasicPlanTwo
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingFour}
                    parentClass="style-3"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.standardPlan.map((item, innerIndex) => (
                  <StandardPlanTwo
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingFour}
                    styleType="three"
                    parentClass="style-3"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.exclusivePlan.map((item, innerIndex) => (
                  <ExclusivePlanTwo
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingFour}
                    styleType="three"
                    parentClass="style-3"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PricingFour;
