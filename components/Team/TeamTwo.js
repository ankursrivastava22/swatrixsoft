import Image from "next/image";
import Link from "next/link";

import TeamData from "../../data/elements/team.json";

const TeamTwo = () => {
  return (
    <>
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="rbt-team-tab-content tab-content" id="myTabContent">
            {TeamData &&
              TeamData.team.map((data, index) => (
                <div
                  className={`tab-pane fade ${
                    data.isActive ? "active" : ""
                  } show`}
                  id={`team-tab${index}`}
                  role="tabpanel"
                  aria-labelledby={`team-tab${index}-tab`}
                  key={index}
                >
                  {data.details.map((item, innerIndex) => (
                    <div className="inner" key={innerIndex}>
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <Image
                            src={item.img}
                            width={415}
                            height={555}
                            priority
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">{item.name}</h4>
                          <span className="designation theme-gradient">
                            {item.type}
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">{item.location}</span>
                          </span>
                        </div>
                        <p>{item.desc}</p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <Link href="#">
                              <i className="feather-phone"></i>
                              {item.phone}
                            </Link>
                          </li>
                          <li>
                            <Link href="mailto:hello@example.com">
                              <i className="feather-mail"></i>
                              {item.email}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            <div className="top-circle-shape"></div>
          </div>
        </div>

        <div className="col-lg-5">
          <ul
            className="rbt-team-tab-thumb nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            {TeamData &&
              TeamData.team.slice(0, 6).map((data, index) => (
                <li key={index}>
                  <Link
                    className={`${data.isActive ? "active" : ""}`}
                    id={`team-tab${index}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#team-tab${index}`}
                    role="tab"
                    aria-controls={`team-tab${index}`}
                    aria-selected={data.isActive}
                    href="#"
                  >
                    <div className="rbt-team-thumbnail">
                      <div className="thumb">
                        <Image
                          src={data.img}
                          width={415}
                          height={555}
                          priority
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeamTwo;
