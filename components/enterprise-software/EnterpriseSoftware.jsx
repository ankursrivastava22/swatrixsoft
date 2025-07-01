// components/enterprise-software/EnterpriseSoftware.js
import React from "react";

const EnterpriseSoftware = () => {
  return (
    <div className="row g-5 align-items-start">
      <div className="col-lg-6">
        <h3 className="mb--20">Comprehensive Enterprise Solutions</h3>
        <p className="mb--30">
          At <strong>Swatrixsoft</strong>, we architect and build platforms that streamline
          operations, enhance collaboration, and deliver actionable insights at scale.
        </p>
        <ul className="plan-offer-list">
          <li><i className="feather-check"></i> Custom ERP & CRM Systems</li>
          <li><i className="feather-check"></i> Workflow Automation & BPM</li>
          <li><i className="feather-check"></i> Data Warehousing & BI Dashboards</li>
          <li><i className="feather-check"></i> API & System Integrations</li>
          <li><i className="feather-check"></i> Cloud Migration & DevOps</li>
          <li><i className="feather-check"></i> Security & Compliance (ISO, GDPR)</li>
          <li><i className="feather-check"></i> High-Availability Architecture</li>
          <li><i className="feather-check"></i> 24/7 Monitoring & Support</li>
        </ul>
      </div>
      <div className="col-lg-6">
        <div className="enterprise-visual-placeholder">
          {/* Optional: add an illustrative graphic or diagram here */}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSoftware;
