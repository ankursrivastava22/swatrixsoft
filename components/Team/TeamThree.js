import React from "react";
import Image from "next/image";
import Link from "next/link";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";

const TeamThree = () => {
  return (
    <>
      <div className="container">
        <TeamHead title="Team (Modern)." desc="Modern Circle Style." />

        <div className="row row--15 mt_dec--30">
          {TeamData &&
            TeamData.team.slice(0, 3).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                {data.details.map((item, innerIndex) => (
                  <div
                    className="rbt-team team-style-default rbt-hover-02"
                    key={innerIndex}
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={415}
                          height={555}
                          priority
                          alt="Corporate Template"
                        />
                      </div>
                      <div className="content">
                        <h2 className="title">{item.name}</h2>
                        <h6 className="subtitle theme-gradient">{item.type}</h6>
                        <span className="team-form">
                          <i className="feather-map-pin"></i>
                          <span className="location">{item.location}</span>
                        </span>
                        <p className="description">{item.desc}</p>
                        <ul className="social-icon social-default icon-naked mt--20">
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TeamThree;
