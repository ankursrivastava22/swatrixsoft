import Image from "next/image";
import Link from "next/link";

const BlogGridTop = ({ BlogData }) => {
  return (
    <>
      <div className="row g-5">
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          {BlogData.slice(0, 1).map((data, index) => (
            <div
              className="rbt-card variation-02 height-330 rbt-hover"
              key={index}
            >
              <div className="rbt-card-img">
                <Link href={`/blog-details/${data.slug}`}>
                  <Image
                    src={data.thumbnail.large}
                    width={580}
                    height={300}
                    priority
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <h3 className="rbt-card-title">
                  <Link href={`/blog-details/${data.slug}`}>{data.title}</Link>
                </h3>
                <p className="rbt-card-text">{data.desc}</p>
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
                          <path strokeLinecap="square" d="M.663 5.572h14.594" />
                        </g>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          {BlogData.slice(1, 4).map((data, index) => (
            <div
              className={`rbt-card card-list variation-02 rbt-hover ${
                index !== 0 ? "mt--30" : ""
              }`}
              key={index}
            >
              <div className="rbt-card-img">
                <Link href={`/blog-details/${data.slug}`}>
                  <Image
                    src={data.thumbnail.large}
                    width={580}
                    height={300}
                    priority
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <Link href={`/blog-details/${data.slug}`}>{data.title}</Link>
                </h5>
                <div className="rbt-card-bottom">
                  <Link
                    className="transparent-button"
                    href={`/blog-details/${data.slug}`}
                  >
                    Read Article
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                          <path strokeLinecap="square" d="M.663 5.572h14.594" />
                        </g>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogGridTop;
