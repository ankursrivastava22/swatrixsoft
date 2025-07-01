// components/development-and-design/DevelopmentDesign.js
import Image from "next/image";
import aboutImg from "../../public/images/about/about-14.jpg";

const DevelopmentDesign = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-5">
        <div className="content">
          <Image
            className="w-100 radius-10"
            src={aboutImg}
            width={526}
            height={645}
            alt="Swatrixsoft Web & Mobile Development"
          />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
          <div className="section-title text-start">
            <h2 className="title">Expert Web & Mobile Development</h2>
            <p className="description mt--20">
              At <strong>Swatrixsoft</strong>, we craft robust, scalable digital solutions—
              from responsive websites to feature-rich mobile apps. Our developers
              blend technical excellence with creative design to deliver products
              that engage users and drive growth.
            </p>

            <h5 className="mb--20">Our Core Services:</h5>
            <div className="plan-offer-list-wrapper">
              <ul className="plan-offer-list">
                <li><i className="feather-check"></i> Full-Stack Development (MERN, MEAN)</li>
                <li><i className="feather-check"></i> E-commerce Platforms & Integrations</li>
                <li><i className="feather-check"></i> Progressive Web Apps & SPA</li>
                <li><i className="feather-check"></i> Custom & Headless CMS Solutions</li>
                <li><i className="feather-check"></i> API & Microservices Architecture</li>
                <li><i className="feather-check"></i> AI/ML Integrations & Automation</li>
              </ul>
              <ul className="plan-offer-list">
                <li><i className="feather-check"></i> Mobile-First & Responsive Design</li>
                <li><i className="feather-check"></i> Performance & SEO Optimization</li>
                <li><i className="feather-check"></i> Secure Development (OWASP Standards)</li>
                <li><i className="feather-check"></i> Cloud & DevOps (AWS, GCP, Azure)</li>
                <li><i className="feather-check"></i> Third-Party Integrations (CRM, ERP, Payments)</li>
                <li><i className="feather-check"></i> 24/7 Support & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentDesign;
