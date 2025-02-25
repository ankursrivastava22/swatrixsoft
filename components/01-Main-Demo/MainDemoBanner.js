import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/banner/banner-01.png";
import shape1 from "../../public/images/shape/shape-01.png";
import shape2 from "../../public/images/shape/shape-02.png";

import HomeCourses from "./Home-Sections/HomeCourse";

const MainDemoBanner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pb--120 pt--70 space-responsive-xxl">
            <div className="content">
              <div className="inner">
                <div className="rbt-new-badge rbt-new-badge-one">
                  <span className="rbt-new-badge-icon">🏆</span> The Leader in
                  Online Learning
                </div>

                <h1 className="title">
                  Build The Skills <br /> To Drive Your Career.
                </h1>
                <p className="description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                  <strong> Velit officia consequat.</strong>
                </p>
                <div className="slider-btn">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View Course</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="shape-wrapper" id="scene">
                <Image src={img} width={1200} height={1400} alt="Hero Image" />
                <div className="hero-bg-shape-1 layer" data-depth="0.4">
                  <Image
                    src={shape1}
                    width={428}
                    height={377}
                    alt="Hero Image Background Shape"
                  />
                </div>
                <div className="hero-bg-shape-2 layer" data-depth="0.4">
                  <Image
                    src={shape2}
                    width={372}
                    height={396}
                    alt="Hero Image Background Shape"
                  />
                </div>
              </div>

              <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
                <HomeCourses start={0} end={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDemoBanner;
