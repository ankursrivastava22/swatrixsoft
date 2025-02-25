import Image from "next/image";
import Link from "next/link";

import React from "react";

const Biography = ({ checkMatchProfile }) => {
  return (
    <>
      <div className="col-lg-12 mt--30">
        {checkMatchProfile &&
          checkMatchProfile.courseInstructor.map((data, index) => (
            <div className="profile-content rbt-shadow-box" key={index}>
              <h4 className="rbt-title-style-3">Biography</h4>

              {data.body.map((item, innerIndex) => (
                <div className="row g-5" key={innerIndex}>
                  <div className="col-lg-8">
                    <p className="mt--10 mb--20">{item.desc}</p>
                    <ul className="social-icon social-default justify-content-start">
                      {item.social.map((social, index) => (
                        <li key={index}>
                          <Link href={social.link}>
                            <i className={`feather-${social.icon}`}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="rbt-information-list mt--15">
                      <li>
                        <Link href="#">
                          <i className="feather-phone"></i>
                          {item.contact}
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:hello@example.com">
                          <i className="feather-mail"></i>
                          {item.mail}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 offset-lg-2">
                    <div className="feature-sin best-seller-badge text-end h-100">
                      <span className="rbt-badge-2 w-100 text-center badge-full-height">
                        <span className="image">
                          <Image
                            src={item.awardImg}
                            width={50}
                            height={50}
                            priority
                            alt="Best Seller Icon"
                          />
                        </span>
                        {item.sellsType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Biography;
