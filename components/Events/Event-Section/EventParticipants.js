import Image from "next/image";
import Link from "next/link";

const EventParticipants = ({ getEventData }) => {
  return (
    <>
  
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-start mb--20">
              <span className="subtitle bg-secondary-opacity">
                Event Participants
              </span>
              <h2 className="title">Event Participants</h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {getEventData.eventParticipants.map((data, index) => (
            <div className="col-lg-6 col-md-6 col-12" key={index}>
              <div className="rbt-team team-style-default style-two rbt-hover">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      src={data.img}
                      width={415}
                      height={555}
                      alt="Corporate Template"
                    />
                  </div>
                  <div className="content">
                    <h2 className="title">{data.name}</h2>
                    <h6 className="subtitle theme-gradient">{data.type}</h6>
                    <span className="team-form">
                      <i className="feather-map-pin"></i>
                      <span className="location">{data.location}</span>
                    </span>
                    <p className="description">{data.desc}</p>
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
            </div>
          ))}
        </div>
    </>
  );
};

export default EventParticipants;
