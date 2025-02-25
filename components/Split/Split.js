import Image from "next/image";

import SplitData from "../../data/elements/split.json";

const Split = () => {
  return (
    <>
      {SplitData &&
        SplitData.splitOne.map((data, index) => (
          <div className="row g-0 align-items-center" key={index}>
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="thumbnail image-left-content">
                <Image
                  src={data.img}
                  width={960}
                  height={650}
                  alt="split Images"
                />
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="split-inner">
                <div className="shape">
                  <Image
                    src={data.imgIcon}
                    width={96}
                    height={96}
                    alt="Shape Images"
                  />
                </div>
                <h4
                  className="title sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  {data.subTitle}
                </h4>
                <p
                  className="description sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  {data.desc}
                </p>
                <ul
                  className="split-list sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="350"
                >
                  {data.list.map((item, innerIndex) => (
                    <li key={innerIndex}>{item.text}</li>
                  ))}
                </ul>
                <div
                  className="view-more-button mt--35 sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="400"
                >
                  <a className="rbt-moderbt-btn" href="#">
                    <span className="moderbt-btn-text">Schedule A Tour</span>
                    <i className="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Split;
