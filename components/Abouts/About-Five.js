import Image from "next/image";

import AboutData from "../../data/elements/about.json";

const AboutFive = () => {
  return (
    <div className="row">
      {AboutData &&
        AboutData.aboutFive.map((data, index) => (
          <div className="col-lg-10 offset-lg-1" key={index}>
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <Image
                    src={data.authorImg}
                    width={530}
                    height={580}
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="content">
                  <div className="inner">
                    <h4 className="title">
                      I&apos;m
                      <span className="theme-gradient">{data.name}</span> <br />
                      {data.title}
                    </h4>
                    <p>{data.info}</p>
                    <ul className="contact-address">
                      <li>
                        <i className="feather-file"></i> {data.designation}
                      </li>
                      <li>
                        <i className="feather-phone"></i> {data.phone}
                      </li>
                      <li>
                        <i className="feather-map-pin"></i>
                        {data.address}
                      </li>
                    </ul>
                    <div className="signature-image mt--20">
                      <Image
                        src={data.signature}
                        width={150}
                        height={83}
                        alt="Signature Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-circle-shape position-bottom-right"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AboutFive;
