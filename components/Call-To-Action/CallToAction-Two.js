import Image from "next/image";
import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";
import CallToActionHead from "./CallToAction-Head";

const CallToActionTwo = () => {
  return (
    <>
      {CallToActionData &&
        CallToActionData.collectionTwo.map((data, index) => (
          <div
            className="rbt-callto-action-area bg-color-extra2 rbt-section-gap"
            key={index}
          >
            <CallToActionHead tag={data.tag} title={data.title} />

            <div className="rbt-callto-action rbt-cta-default style-2">
              <div className="container content-wrapper overflow-hidden">
                <div className="row gy-5 align-items-center">
                  <div className="col-lg-8">
                    <div className="inner">
                      <div className="content text-left">
                        <h3
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="200"
                        >
                          {data.subTitle}
                        </h3>
                        <h6
                          className="subtitle"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="300"
                        >
                          {data.desc}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="call-to-btn text-start text-lg-end position-relative"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link
                        className="rbt-btn rbt-switch-btn rbt-switch-y"
                        href="#"
                      >
                        <span data-text="Purchase Histudy">
                          Purchase Histudy
                        </span>
                      </Link>
                      <div className="shape-text-image">
                        <Image
                          className="rbt-rotatation-round"
                          src={data.img}
                          width={397}
                          height={397}
                          alt="Education Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CallToActionTwo;
