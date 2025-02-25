import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/testimonial/client-02.png";

import CallToAction from "../Call-To-Action/CallToAction";
import ServiceEleven from "../Services/Service-Eleven";

import CardFive from "../Cards/Card-Five";
import CounterTwo from "../Counters/Counter-Two";
import Pricing from "../Pricing/Pricing";
import TeamFour from "../Team/TeamFour";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";

const Kindergarten = ({ blogs }) => {
  return (
    <>
      <div
        className="rbt-banner-area rbt-banner-4 bg_image bg_image--13 header-transperent-spacer"
        style={{ paddingTop: "140px" }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content text-start">
                  <div className="inner">
                    <div className="mb--20">
                      <Link href="#" className="rbt-badge-2">
                        <div className="image">
                          <Image
                            src={img}
                            width={30}
                            height={30}
                            alt="Education Images"
                          />
                        </div>
                        Learn with <strong>Fatima Asrafy</strong>
                      </Link>
                    </div>
                    <h1 className="title">
                      Putting Your Child&apos;s Future <br /> in Great Motion.
                    </h1>
                    <p className="description">
                      We just don&apos;t give our student only <br /> lecture
                      but real life experience.
                    </p>

                    <ul className="rbt-list-style-2">
                      <li>
                        <i className="feather-check"></i>No Cridit Card
                      </li>
                      <li>
                        <i className="feather-check"></i>14 Days Trial
                      </li>
                      <li>
                        <i className="feather-check"></i>Free For Teachers
                      </li>
                    </ul>

                    <div className="slider-btn">
                      <Link
                        className="rbt-btn radius rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Get Started Today">
                          Get Started Today
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-wrapper rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Our Curriculum
                </span>
                <h2 className="title">Our Curriculum</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ServiceEleven isTitle={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-callto-action-area mt_dec--half">
        <CallToAction />
      </div>

      <div className="rbt-course-area bg-color-light rbt-section-gap default-callto-action-overlap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Histudy Course
                </span>
                <h2 className="title">Weekly Online Classes.</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <CardFive />
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <a className="rbt-btn rbt-marquee-btn" href="#">
                  <span data-text="Load More Course">Load More Course</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area bg-color-white rbt-section-gap">
        <CounterTwo />
      </div>

      <div className="rbt-pricing-area bg-color-light rbt-section-gap">
        <Pricing title="Histudy Course Plan" tag="COURSE PRICING" />
      </div>

      <div className="rbt-team-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Instructor
                </span>
                <h2 className="title">Meet Our Teacher.</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <TeamFour isHead={false} />
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <a className="rbt-btn rbt-marquee-btn" href="#">
                  <span data-text="View All Teacher">View All Teacher</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
        <div className="wrapper mb--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                    People like histudy education. <br /> No joking - Parents
                    Review Here!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      <div className="rbt-rbt-blog-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Histudy Post
                </span>
                <h2 className="title">From Our Post.</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            {blogs.slice(0, 3).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="rbt-card variation-02 rbt-hover">
                  <div className="rbt-card-img">
                    <Link href={`/blog-details/${data.slug}`}>
                      <Image
                        src={data.thumbnail.large}
                        width={450}
                        height={267}
                        priority
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <Link href={`/blog-details/${data.slug}`}>
                        {data.title}
                      </Link>
                    </h5>
                    <p className="rbt-card-text">{data?.desc}</p>
                    <div className="rbt-card-bottom">
                      <Link
                        className="transparent-button"
                        href={`/blog-details/${data.slug}`}
                      >
                        Learn More
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                strokeLinecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <a className="rbt-btn rbt-marquee-btn" href="#">
                  <span data-text="View All Post">View All Post</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
};

export default Kindergarten;
