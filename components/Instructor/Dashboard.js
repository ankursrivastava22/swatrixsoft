import React from "react";
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";

const Dashboard = () => {
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Dashboard</h4>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-primary-opacity"
                iconClass="bg-primary-opacity"
                numberClass="color-primary"
                icon="feather-book-open"
                title="Enrolled Courses"
                value={30}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-secondary-opacity"
                iconClass="bg-secondary-opacity"
                numberClass="color-secondary"
                icon="feather-monitor"
                title="ACTIVE COURSES"
                value={10}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-violet-opacity"
                iconClass="bg-violet-opacity"
                numberClass="color-violet"
                icon="feather-award"
                title="Completed Courses"
                value={7}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-pink-opacity"
                iconClass="bg-pink-opacity"
                numberClass="color-pink"
                icon="feather-users"
                title="Total Students"
                value={160}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-coral-opacity"
                iconClass="bg-coral-opacity"
                numberClass="color-coral"
                icon="feather-gift"
                title="Total Courses"
                value={20}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-warning-opacity"
                iconClass="bg-warning-opacity"
                numberClass="color-warning"
                icon="feather-dollar-sign"
                title="Total Earnings"
                value={25000}
              />
            </div>
          </div>
        </div>
      </div>

      <MyCourses />
    </>
  );
};

export default Dashboard;
