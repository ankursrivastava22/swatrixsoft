import Image from "next/image";

const TeamWidget = ({ widgetStyle, teamMember }) => {
  return (
    <>
      {widgetStyle === "card-box" && (
        <div className="rbt-team team-style-default style-two rbt-hover">
          <div className="inner">
            <div className="thumbnail">
              <Image
                width={415}
                height={555}
                src={teamMember.image}
                alt={teamMember.name}
              />
            </div>
            <div className="content">
              <h2 className="title">{teamMember.name}</h2>
              <h6 className="subtitle theme-gradient">
                {teamMember.designation}
              </h6>
              <span className="team-form">
                <i className="feather-map-pin" />
                <span className="location">{teamMember.address}</span>
              </span>
              <p className="description">{teamMember.bio}</p>
              <ul className="social-icon social-default icon-naked mt--20">
                {teamMember.social?.map((social, index) => (
                  <li key={`social-${index}`}>
                    <a href={social.url}>
                      {social.type === "Facebook" && (
                        <i className="feather-facebook" />
                      )}
                      {social.type === "Twitter" && (
                        <i className="feather-twitter" />
                      )}
                      {social.type === "Instagram" && (
                        <i className="feather-instagram" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamWidget;
