import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";

const CallToActionFive = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-cta-5">
                {CallToActionData &&
                  CallToActionData.collectionFive.map((data, index) => (
                    <div className="content" key={index}>
                      <h1 className="title">{data.title}</h1>
                      <p>{data.desc}</p>
                      <div className="rbt-button-group justify-content-start">
                        <Link className="rbt-btn btn-gradient" href="#">
                          Get Bundle
                        </Link>
                        <Link className="rbt-btn btn-border" href="#">
                          See Features
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionFive;
