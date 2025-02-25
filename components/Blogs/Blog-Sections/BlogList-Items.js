import Link from "next/link";
import Image from "next/image";

const BlogListItems = ({ start, end, selectedBlog }) => {
  return (
    <>
      {selectedBlog &&
        selectedBlog.slice(start, end).map((item, index) => (
          <div
            className="rbt-card card-list variation-02 rbt-hover mt--30"
            key={index}
          >
            <div className="rbt-card-img">
              <Link href={`/blog-details/${item.slug}`}>
                <Image
                  src={item.thumbnail.large}
                  width={580}
                  height={300}
                  priority
                  alt="Card image"
                />
              </Link>
            </div>
            <div className="rbt-card-body">
              <h5 className="rbt-card-title">
                <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
              </h5>
              <div className="rbt-card-bottom">
                <Link
                  className="transparent-button"
                  href={`/blog-details/${item.slug}`}
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
    </>
  );
};

export default BlogListItems;
