import React from "react";
import Image from "next/image";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";

const TeamFour = ({ isHead }) => {
  return (
    <>
      <div className="container">
        {isHead ? (
          <TeamHead title="Team (Standard)." desc="Standard Image Style." />
        ) : (
          ""
        )}

        <div className="row row--15 mt_dec--30">
          {TeamData &&
            TeamData.team.slice(3, 6).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                {data.details.map((item, innderIndex) => (
                  <div
                    className="rbt-team team-style-default style-three rbt-hover"
                    key={innderIndex}
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

export default TeamFour;
