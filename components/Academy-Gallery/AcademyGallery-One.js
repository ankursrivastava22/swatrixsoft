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
              <h2 className="title">Arts & Humanities</h2>
              <p className="description mt--20">
                <strong>Histudy educational platform</strong> <br /> ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>

              <h5 className="mb--20">More Feature List:</h5>
              <div className="plan-offer-list-wrapper">
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Art, Film
                  </li>
                  <li>
                    <i className="feather-check"></i> Visual Studies
                  </li>
                  <li>
                    <i className="feather-check"></i> Anthropology
                  </li>
                  <li>
                    <i className="feather-check"></i> Arts
                  </li>
                  <li>
                    <i className="feather-check"></i> Humanities
                  </li>
                  <li>
                    <i className="feather-check"></i> ARTS Is Better
                  </li>
                </ul>
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Guide To ARTS
                  </li>
                  <li>
                    <i className="feather-check"></i> Selling ARTS
                  </li>
                  <li>
                    <i className="feather-check"></i> About ARTS
                  </li>
                  <li>
                    <i className="feather-check"></i> Your ARTS
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
      </div>
    </>
  );
};

export default AcademyGalleryOne;
