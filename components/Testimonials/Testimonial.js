import Image from "next/image";
import Link from "next/link";

import TestimonialData from "../../data/elements/testimonial.json";

const Testimonial = () => {
  return (
    <div className="container">
      {TestimonialData &&
        TestimonialData.testimonialOne.map((data, index) => (
          <div className="row align-items-center row--30" key={index}>
            <div className="col-lg-6">
              <div
                className="rbt-testimonial-content tab-content"
                id="myTabContent"
              >
                {data.body.map((item, innerIndex) => (
                  <div
                    className={`tab-pane fade ${
                      item.isSelected ? "active show" : ""
                    }`}
                    id={item.target}
                    role="tabpanel"
                    aria-labelledby={item.tab}
                    key={innerIndex}
                  >
                    <div className="inner">
                      <div className="rating mb--30">
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                    <div className="author-info">
                      <h6>
                        <span>{item.name} </span> - {item.post}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 mt_md--30 mt_sm--30">
              <ul
                className="testimonial-thumb-wrapper nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                {data.user.map((user, indexUser) => (
                  <li key={indexUser}>
                    <Link
                      className={`${user.isSelected ? "active" : ""}`}
                      id={user.tab}
                      role="tab"
                      href="#"
                      data-bs-toggle="tab"
                      data-bs-target={`#${user.target}`}
                      aria-controls={user.target}
                      aria-selected={user.isSelected}
                    >
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <Image
                            src={user.img}
                            width={494}
                            height={494}
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
        ))}
    </div>
  );
};

export default Testimonial;
