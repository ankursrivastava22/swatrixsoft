import Image from "next/image";
import Link from "next/link";

import CardData from "../../data/elements/card";

const CardFour = () => {
  return (
    <div className="row row--15">
      {CardData &&
        CardData.cardFour.map((data, index) => (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover card-list-2">
              <div className="rbt-card-img">
                <Link href={data.link}>
                  <Image
                    src={data.img}
                    width={231}
                    height={324}
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-category">
                  <Link href="#">{data.categoryOne}</Link>
                  <Link href="#">{data.categoryTwo}</Link>
                </div>
                <h4 className="rbt-card-title">
                  <Link href={data.link}>{data.title}</Link>
                </h4>
                <span className="lesson-number">
                  {data.lesson} lessons
                  <span className="lesson-time">(4 hours total)</span>
                </span>
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
        ))}
    </div>
  );
};

export default CardFour;
