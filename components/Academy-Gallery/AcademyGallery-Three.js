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
              alt="About Images"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title">Massage Therapy</h2>
              <p className="description mt--20">
                <strong>Histudy educational platform</strong> <br /> ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>

              <h5 className="mb--20">More Feature List:</h5>
              <div className="plan-offer-list-wrapper">
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Asked Your Teachers
                  </li>
                  <li>
                    <i className="feather-check"></i> Visual Studies
                  </li>
                  <li>
                    <i className="feather-check"></i> Better Than Barack
                  </li>
                  <li>
                    <i className="feather-check"></i> Expert Interview
                  </li>
                  <li>
                    <i className="feather-check"></i> Humanities
                  </li>
                  <li>
                    <i className="feather-check"></i> Best Practices
                  </li>
                </ul>
                <ul className="plan-offer-list">
                  <li>
                    <i className="feather-check"></i> Select the criteria
                  </li>
                  <li>
                    <i className="feather-check"></i> Decide
                  </li>
                  <li>
                    <i className="feather-check"></i> Tell your story
                  </li>
                  <li>
                    <i className="feather-check"></i> Assemble the evidence
                  </li>
                  <li>
                    <i className="feather-check"></i> Practices For Massage
                  </li>
                  <li>
                    <i className="feather-check"></i> Old School Massage
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
