import Image from "next/image";
import aboutImg from "../../public/images/about/about-14.jpg";

const AcademyGalleryOne = () => {
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
              alt="About Images"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              {/* Updated Heading */}
              <h2 className="title">Website Development Company in Jodhpur</h2>
              
              {/* Updated Description */}
              <p className="description mt--20">
                Swatrixsoft is a full-service website development company based in Jodhpur. 
                We help businesses of all sizes transform ideas into engaging online 
                experiences. Our team crafts high-performance websites, intuitive user 
                interfaces, and scalable solutions—ensuring your digital presence truly 
                stands out. Whether you need to hire dedicated developers or enhance 
                an existing platform, we have you covered.
              </p>

              <h5 className="mb--20">More Feature List:</h5>
              <div className="plan-offer-list-wrapper">
                {/* First Column of Features */}
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Custom Web Solutions
                  </li>
                  <li>
                    <i className="feather-check"></i> Hire Dedicated Developers
                  </li>
                  <li>
                    <i className="feather-check"></i> UI/UX Design & Consulting
                  </li>
                  <li>
                    <i className="feather-check"></i> E-Commerce Integration
                  </li>
                  <li>
                    <i className="feather-check"></i> Scalable & Secure Hosting
                  </li>
                  <li>
                    <i className="feather-check"></i> 24/7 Maintenance & Support
                  </li>
                </ul>

                {/* Second Column of Features */}
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> SEO-Friendly Development
                  </li>
                  <li>
                    <i className="feather-check"></i> Performance Optimization
                  </li>
                  <li>
                    <i className="feather-check"></i> Third-Party API Integration
                  </li>
                  <li>
                    <i className="feather-check"></i> Cross-Platform Compatibility
                  </li>
                  <li>
                    <i className="feather-check"></i> Agile Development Process
                  </li>
                  <li>
                    <i className="feather-check"></i> Timely Delivery & Transparency
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

export default AcademyGalleryOne;
