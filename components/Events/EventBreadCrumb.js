import Image from "next/image";
import Link from "next/link";

import bgImg from "../../public/images/bg/bg-image-10.jpg";

const EventBreadCrumb = ({ getMatchEvent }) => {
  return (
    <>
      <div className="breadcrumb-inner breadcrumb-dark">
        <Image src={bgImg} alt="Education Images" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    {getMatchEvent.category}
                  </li>
                </ul>
                <h2 className="title mb--0">{getMatchEvent.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBreadCrumb;
