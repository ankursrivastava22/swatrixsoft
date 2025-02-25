import Image from "next/image";
import Link from "next/link";

import CardData from "../../data/elements/card";

const CardTwo = () => {
  return (
    <>
      {CardData &&
        CardData.cardTwo.map((data, index) => (
          <div className="row row--15" key={index}>
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card height-330 variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link href={data.link}>
                    <Image
                      src={data.img}
                      width={data.width}
                      height={data.height}
                      alt="Card image"
                    />
                    {data.badge ? (
                      <div className="rbt-default-badge">
                        <span>{data.badge}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link href={data.link}>{data.title}</Link>
                  </h4>
                  <p className="rbt-card-text">{data.desc}</p>
                  <div className="rbt-card-bottom">
                    <Link className="transparent-button" href={data.link}>
                      Learn More
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            ></path>
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              {data.children.map((item, innerIndex) => (
                <div
                  className={`rbt-card card-list variation-02 rbt-hover ${
                    item.mt ? "mt--30" : ""
                  }`}
                  key={innerIndex}
                >
                  <div className="rbt-card-img">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        width={item.width}
                        height={item.height}
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <Link href={item.link}>{item.title}</Link>
                    </h5>
                    <div className="rbt-card-bottom">
                      <Link className="transparent-button" href={item.link}>
                        Learn More
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                              <path
                                strokeLinecap="square"
                                d="M.663 5.572h14.594"
                              ></path>
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default CardTwo;
