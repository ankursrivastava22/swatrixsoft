import Image from "next/image";

const TestimonialWidget = ({ testimonialData, testimonialStyle = "one" }) => {
  return (
    <>
      {testimonialStyle === "one" && (
        <div className="rbt-testimonial-box style-2">
          <div className="inner">
            <div className="icons">
              <Image
                width={testimonialData.image.width}
                height={testimonialData.image.height}
                src={testimonialData.image.src}
                alt="Clint Images"
              />
            </div>
            <div className="description">
              <p className="subtitle-3">{testimonialData.description}</p>
              <div className="clint-info-wrapper">
                <div className="thumb">
                  <Image
                    width={494}
                    height={494}
                    src={testimonialData.client.image}
                    alt="Clint Images"
                  />
                </div>
                <div className="client-info">
                  <h5 className="title">
                    {testimonialData.client.name},
                    <span>{testimonialData.client.designation}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {testimonialStyle === "two" && (
        <div className="rbt-testimonial-box">
          <div className="inner bg-no-shadow bg-color-primary-opacity">
            <div className="clint-info-wrapper">
              <div className="thumb">
                <Image
                  width={494}
                  height={494}
                  src={testimonialData.client.image}
                  alt="Clint Images"
                />
              </div>
              <div className="client-info">
                <h5 className="title">{testimonialData.client.name}</h5>
                <span>{testimonialData.client.designation}</span>
              </div>
            </div>
            <div className="description">
              <p className="subtitle-3">{testimonialData.description}</p>
              <div className="rating mt--20">
                <a href="#">
                  <i className="fa fa-star" />
                </a>
                <a href="#">
                  <i className="fa fa-star" />
                </a>
                <a href="#">
                  <i className="fa fa-star" />
                </a>
                <a href="#">
                  <i className="fa fa-star" />
                </a>
                <a href="#">
                  <i className="fa fa-star" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialWidget;
