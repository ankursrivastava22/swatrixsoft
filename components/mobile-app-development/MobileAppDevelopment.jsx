import Image from "next/image";
import aboutImg from "../../public/images/about/about-14.jpg";

const MobileAppDevelopment = () => {
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div className="content">
            <Image
              className="w-100 radius-10"
              src={aboutImg}
              width={526}
              height={645}
              alt="Web Development Services"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title">Expert Web Development Services</h2>
              
              <p className="description mt--20">
                As a leading web development company in Jodhpur, we specialize in creating 
                powerful digital solutions that drive business growth. Our expert team 
                combines technical excellence with creative innovation to deliver websites 
                that not only look stunning but also perform exceptionally well. From 
                startups to enterprises, we're your partner in digital success.
              </p>

              <h5 className="mb--20">Our Core Services:</h5>
              <div className="plan-offer-list-wrapper">
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Full-Stack Development
                  </li>
                  <li>
                    <i className="feather-check"></i> E-commerce Solutions
                  </li>
                  <li>
                    <i className="feather-check"></i> Progressive Web Apps
                  </li>
                  <li>
                    <i className="feather-check"></i> Custom CMS Development
                  </li>
                  <li>
                    <i className="feather-check"></i> API Development
                  </li>
                  <li>
                    <i className="feather-check"></i> Cloud Integration
                  </li>
                </ul>

                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Mobile-First Design
                  </li>
                  <li>
                    <i className="feather-check"></i> Performance Optimization
                  </li>
                  <li>
                    <i className="feather-check"></i> Security Implementation
                  </li>
                  <li>
                    <i className="feather-check"></i> Database Management
                  </li>
                  <li>
                    <i className="feather-check"></i> DevOps Services
                  </li>
                  <li>
                    <i className="feather-check"></i> 24/7 Technical Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;