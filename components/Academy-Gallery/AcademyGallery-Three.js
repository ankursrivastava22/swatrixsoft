import Image from "next/image";

import aboutImg from "../../public/images/about/about-13.jpg";

const AcademyGalleryThree = () => {
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
              alt="Technology Stack"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title">Technology Stack</h2>
              <p className="description mt--20">
                Our development team leverages cutting-edge technologies and frameworks to build robust, scalable web solutions. We stay updated with the latest industry trends to ensure your project benefits from modern development practices and tools.
              </p>

              <h5 className="mb--20">Technologies We Use:</h5>
              <div className="plan-offer-list-wrapper">
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> React.js & Next.js
                  </li>
                  <li>
                    <i className="feather-check"></i> Node.js & Express
                  </li>
                  <li>
                    <i className="feather-check"></i> MongoDB & MySQL
                  </li>
                  <li>
                    <i className="feather-check"></i> PHP & Laravel
                  </li>
                  <li>
                    <i className="feather-check"></i> WordPress & WooCommerce
                  </li>
                  <li>
                    <i className="feather-check"></i> HTML5 & CSS3
                  </li>
                </ul>
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> AWS & Cloud Services
                  </li>
                  <li>
                    <i className="feather-check"></i> Docker & Kubernetes
                  </li>
                  <li>
                    <i className="feather-check"></i> Redux & Context API
                  </li>
                  <li>
                    <i className="feather-check"></i> GraphQL & REST APIs
                  </li>
                  <li>
                    <i className="feather-check"></i> Tailwind & Bootstrap
                  </li>
                  <li>
                    <i className="feather-check"></i> Git & Version Control
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

export default AcademyGalleryThree;