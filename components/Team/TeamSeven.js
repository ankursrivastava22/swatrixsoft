import Image from "next/image";
import Link from "next/link";

import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead";

const TeamSeven = () => {
  return (
    <>
      <div className="container">
        <TeamHead
          title="Team (Hover Bottom Content)."
          desc="Awesome Hover Bottom Content."
        />
        <div className="row row--15 mt_dec--30">
          {TeamData &&
            TeamData.team.slice(4, 7).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                {data.details.map((item, innerIndex) => (
                  <div className="team team-style--bottom" key={innerIndex}>
                    <div className="thumbnail">
                      <Image
                        src={item.img}
                        width={415}
                        height={555}
                        priority
                        alt="Blog Images"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">{item.name}</h4>
                      <p className="designation"> {item.type}</p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TeamSeven;
