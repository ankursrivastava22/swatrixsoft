import Link from "next/link";

import EventData from "../../data/events.json";

const EventHead = () => {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">All Event</li>
                  </ul>

                  <div className=" title-wrapper">
                    <h1 className="title mb--0">All Event</h1>
                    <Link href="#" className="rbt-badge-2">
                      <div className="image">🎉</div> {EventData.events.length}
                      Events
                    </Link>
                  </div>
                  <p className="description">
                    Event that help beginner designers become true unicorns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHead;
