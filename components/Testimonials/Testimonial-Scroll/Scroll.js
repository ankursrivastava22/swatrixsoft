import Image from "next/image";
import Link from "next/link";

const Scroll = ({ testimonial, testimonialData }) => {
  return (
    <>
      {testimonial &&
        testimonialData.map((data, index) => (
          <div className="scroll-animation-wrapper mt--50" key={index}>
            <div className="scroll-animation scroll-right-left">
              {data.left.map((item, innerIndex) => (
                <div className="single-column-20" key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item.img}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item.title}</h5>
                          <span>
                            {item.position} <i>{item.company}</i>
                          </span>
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <Link className="rbt-btn-link" href="#">
                          Read Project Case Study
                          <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      {testimonialData &&
        testimonialData.map((data, index) => (
          <div className="scroll-animation-wrapper mt--30" key={index}>
            <div className="scroll-animation scroll-left-right">
              {data.right.map((item, innerIndex) => (
                <div className="single-column-20" key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item.img}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item.title}</h5>
                          <span>
                            {item.position} <i>{item.company}</i>
                          </span>
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <Link className="rbt-btn-link" href="#">
                          Read Project Case Study
                          <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Scroll;
