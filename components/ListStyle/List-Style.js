import React from "react";

const ListStyle = () => {
  return (
    <div className="container">
      <div className="row g-5">
        {/* First Column: Key Benefits */}
        <div className="col-lg-6 col-md-12 col-12">
          <ul className="rbt-list-style-1">
            <li>
              <i className="feather-check"></i>Develop robust digital solutions with confidence.
            </li>
            <li>
              <i className="feather-check"></i>Gain advanced technical expertise.
            </li>
            <li>
              <i className="feather-check"></i>Build a diverse portfolio of innovative projects.
            </li>
            <li>
              <i className="feather-check"></i>Leverage industry-leading tools for data-driven insights.
            </li>
          </ul>
        </div>
        {/* Second Column: Service Offers */}
        <div className="col-lg-6 col-md-12 col-12">
          <ul className="rbt-list-style-2">
            <li>
              <i className="feather-check"></i>Flexible Payment Options
            </li>
            <li>
              <i className="feather-check"></i>Free Consultation
            </li>
            <li>
              <i className="feather-check"></i>Tailored Enterprise Solutions
            </li>
          </ul>
        </div>
      </div>

      {/* Client Information */}
      <div className="row g-5 mt--40">
        <div className="col-lg-4 col-md-6 col-12">
          <ul>
            <li>Company Name (required)</li>
            <li>Industry (required)</li>
            <li>Business Registration No. (required)</li>
            <li>Contact Person (required)</li>
            <li>Contact Number (required)</li>
            <li>Email Address (required)</li>
          </ul>
        </div>
        {/* Service Package Features - Option 1 */}
        <div className="col-lg-4 col-md-6 col-12">
          <ul className="plan-offer-list">
            <li>
              <i className="feather-check"></i> Enterprise Solutions
            </li>
            <li>
              <i className="feather-check"></i> Digital Marketing Strategies
            </li>
            <li>
              <i className="feather-check"></i> Full-Service IT Support
            </li>
            <li>
              <i className="feather-check"></i> Optimized System Performance
            </li>
            <li>
              <i className="feather-check"></i> Custom App Development
            </li>
            <li className="off">
              <i className="feather-x"></i> 24/7 Premium Support
            </li>
          </ul>
        </div>
        {/* Service Package Features - Option 2 */}
        <div className="col-lg-4 col-md-6 col-12">
          <ul className="plan-offer-list rbt-list-primary-opacity">
            <li>
              <i className="feather-check"></i> Enterprise Solutions
            </li>
            <li>
              <i className="feather-check"></i> Digital Marketing Strategies
            </li>
            <li>
              <i className="feather-check"></i> Full-Service IT Support
            </li>
            <li>
              <i className="feather-check"></i> Optimized System Performance
            </li>
            <li>
              <i className="feather-check"></i> Custom App Development
            </li>
            <li className="off">
              <i className="feather-x"></i> 24/7 Premium Support
            </li>
          </ul>
        </div>
        {/* Special Offer / Highlight Box */}
        <div className="col-lg-6 col-md-6 col-12">
          <div className="bg-gradient-7 rbt-shadow-box">
            <ul className="plan-offer-list rbt-list-white-opacity ">
              <li className="color-white">
                <i className="feather-check"></i> Enterprise-Grade Solutions
              </li>
              <li className="color-white">
                <i className="feather-check"></i> Scalable Architecture
              </li>
              <li className="color-white">
                <i className="feather-check"></i> Integrated Digital Strategies
              </li>
              <li className="color-white">
                <i className="feather-check"></i> Optimized Performance
              </li>
              <li className="color-white">
                <i className="feather-check"></i> Custom Application Development
              </li>
              <li className="off color-white">
                <i className="feather-x"></i> 24/7 Premium Support
              </li>
            </ul>
          </div>
        </div>
        {/* IT Capabilities List */}
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="rbt-list-style-3">
            <li>
              <i className="feather-heart"></i> Innovative Solutions
            </li>
            <li>
              <i className="feather-flag"></i> Cutting-Edge Technology
            </li>
            <li>
              <i className="feather-eye"></i> Scalable Architecture
            </li>
            <li>
              <i className="feather-edit-2"></i> User-Centered Design
            </li>
            <li>
              <i className="feather-battery-charging"></i> Agile Methodologies
            </li>
          </ul>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="row g-5 pt--60">
        <div className="col-lg-6">
          <div className="rbt-feature-wrapper">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-pink-opacity">
                <i className="feather-heart"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Flexible, Custom Solutions</h6>
                <p className="feature-description">
                  We tailor our IT services to your unique business needs, ensuring adaptable and scalable solutions.
                </p>
              </div>
            </div>

            <div className="rbt-feature feature-style-1">
              <div className="icon bg-primary-opacity">
                <i className="feather-book"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Remote Collaboration</h6>
                <p className="feature-description">
                  Our distributed team ensures seamless communication and support, wherever you are.
                </p>
              </div>
            </div>

            <div className="rbt-feature feature-style-1">
              <div className="icon bg-coral-opacity">
                <i className="feather-monitor"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">
                  Expert IT Consultancy
                </h6>
                <p className="feature-description">
                  Our seasoned experts provide guidance from strategy to implementation, ensuring optimal digital performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-feature-wrapper">
            <div className="rbt-feature feature-style-2">
              <div className="icon bg-pink-opacity">
                <i className="feather-heart"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Flexible, Custom Solutions</h6>
                <p className="feature-description">
                  We customize our approach to meet your business goals, ensuring every solution is as unique as your company.
                </p>
              </div>
            </div>

            <div className="rbt-feature feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className="feather-book"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Remote Collaboration</h6>
                <p className="feature-description">
                  Our expert teams work with you remotely, ensuring smooth project execution and constant support.
                </p>
              </div>
            </div>

            <div className="rbt-feature feature-style-2">
              <div className="icon bg-coral-opacity">
                <i className="feather-monitor"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">
                  Expert IT Consultancy
                </h6>
                <p className="feature-description">
                  Leverage our deep industry knowledge to navigate complex digital landscapes and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStyle;
