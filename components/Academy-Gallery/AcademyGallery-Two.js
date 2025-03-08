import Image from "next/image";

import aboutImg from "../../public/images/about/about-04.jpg";

const AcademyGalleryTwo = () => {
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-7 order-2 order-lg-1">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title">Business Administration</h2>
              <p className="description mt--20">
              Swatrixsoft is a full-service website development company based in Jodhpur. We help businesses of all sizes transform ideas into engaging online experiences. Our team crafts high-performance websites, intuitive user interfaces, and scalable solutions—ensuring your digital presence truly stands out.
              </p>

              <h5 className="mb--20">More Feature List:</h5>
              <div className="plan-offer-list-wrapper">
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Secrets Never Knew
                  </li>
                  <li>
                    <i className="feather-check"></i> Will Help You Get
                  </li>
                  <li>
                    <i className="feather-check"></i> Quickest & Easiest
                  </li>
                  <li>
                    <i className="feather-check"></i> Accounting
                  </li>
                  <li>
                    <i className="feather-check"></i> Marketing
                  </li>
                  <li>
                    <i className="feather-check"></i> Arts Is Better
                  </li>
                </ul>
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Business Communication
                  </li>
                  <li>
                    <i className="feather-check"></i> Ways To Improve
                  </li>
                  <li>
                    <i className="feather-check"></i> Administration
                  </li>
                  <li>
                    <i className="feather-check"></i> Man&apos;s Guide
                  </li>
                  <li>
                    <i className="feather-check"></i> Practices For ARTS
                  </li>
                  <li>
                    <i className="feather-check"></i> Old School ARTS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
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
      </div>
    </>
  );
};

export default AcademyGalleryTwo;
