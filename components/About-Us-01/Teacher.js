import Image from "next/image";
import AboutUsData from "../../data/pages/aboutUs01.json";

const Teacher = () => {
  return (
    <>
      <div className="rbt-team-area bg-color-white rbt-section-gapBottom">
        {AboutUsData &&
          AboutUsData.aboutUsO1.map((data, index) => (
            <div className="container" key={index}>
              <div className="row g-5">
                <div className="col-lg-12 mb--60">
                  <div className="section-title text-center">
                    <span className="subtitle bg-pink-opacity">{data.tag}</span>
                    <h2 className="title">{data.title}</h2>
                    <p className="description mt--20">{data.desc}</p>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                {data.body.map((item, innerIndex) => (
                  <div className="col-lg-4 col-md-6 col-12" key={innerIndex}>
                    <div className="rbt-team team-style-default style-three rbt-hover">
                      <div className="inner">
                        <div className="thumbnail">
                          <Image
                            src={item.img}
                            width={415}
                            height={555}
                            alt="Corporate Template"
                          />
                        </div>
                        <div className="content">
                          <h2 className="title">{item.name}</h2>
                          <h6 className="subtitle theme-gradient">
                            {item.dep}
                          </h6>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location"> {item.address}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Teacher;
