import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";

const AboutSaven = () => {
  return (
    <>
      {AboutData &&
        AboutData.aboutSaven.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="inner">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <div className="read-more-btn mt--40">
                    <Link
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                      href="#"
                    >
                      <span data-text="About Histudy">About Histudy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="content">
                <Image
                  src={data.img}
                  width={638}
                  height={410}
                  alt="About Images"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutSaven;
