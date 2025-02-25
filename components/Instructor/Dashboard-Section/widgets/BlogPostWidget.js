import Link from "next/link";
import Image from "next/image";

const BlogPostWidget = ({ post, postStyle = "list" }) => {
  return (
    <>
      {postStyle === "list" && (
        <div className="rbt-card card-list variation-02 rbt-hover mt--30">
          <div className="rbt-card-img">
            <Link href={`/blog/${post.slug}`}>
              <Image
                width={290}
                height={150}
                src={post.postData.thumbnail.large}
                alt={post.postData.title}
                priority
              />
            </Link>
          </div>
          <div className="rbt-card-body">
            <h5 className="rbt-card-title">
              <Link href={`/blog/${post.slug}`}>{post.postData.title}</Link>
            </h5>
            <div className="rbt-card-bottom">
              <Link className="transparent-button" href={`/blog/${post.slug}`}>
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
      )}

      {postStyle === "grid" && (
        <div className="rbt-card variation-02 height-auto rbt-hover">
          <div className="rbt-card-img">
            <Link href={`/blog/${post.slug}`}>
              <Image
                width={1085}
                height={645}
                src={post.postData.thumbnail.large}
                alt={post.postData.title}
                priority
              />
            </Link>
          </div>
          <div className="rbt-card-body">
            <h3 className="rbt-card-title">
              <Link href={`/blog/${post.slug}`}>{post.postData.title}</Link>
            </h3>
            <p className="rbt-card-text text-truncate">
              {post.postData.excerpt}
            </p>
            <div className="rbt-card-bottom">
              <Link className="transparent-button" href={`/blog/${post.slug}`}>
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
      )}

      {postStyle === "grid-minimal" && (
        <div className="rbt-card variation-02 rbt-hover card-minimal">
          <div className="rbt-card-body">
            <ul className="meta-list justify-content-start mb--30">
              <li className="list-item">
                <i className="feather-clock" />
                <span>{post.postData.publishedAt}</span>
              </li>
            </ul>
            <h4 className="rbt-card-title">
              <Link href={`/blog/${post.slug}`}>{post.postData.title}</Link>
            </h4>
            <div className="rbt-card-bottom mt--40">
              <Link className="transparent-button" href={`/blog/${post.slug}`}>
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
      )}

      {postStyle === "grid-style-2" && (
        <div className="rbt-blog-grid rbt-card variation-02 rbt-hover">
          <div className="rbt-card-img">
            <Link href={`/blog/${post.slug}`}>
              <Image
                width={1085}
                height={645}
                src={post.postData.thumbnail.large}
                alt={post.postData.title}
                priority
              />
            </Link>
          </div>
          <div className="rbt-card-body">
            <h5 className="rbt-card-title">
              <Link href={`/blog/${post.slug}`}>{post.postData.title}</Link>
            </h5>
            <ul className="blog-meta">
              <li>
                <i className="feather-user" /> admin
              </li>
              <li>
                <i className="feather-clock" /> {post.postData.publishedAt}
              </li>
              <li>
                <i className="feather-watch" /> {post.postData.readingTime}
              </li>
            </ul>
            <p className="rbt-card-text">{post.postData.excerpt}</p>
            <div className="rbt-card-bottom">
              <Link className="transparent-button" href={`/blog/${post.slug}`}>
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
      )}
    </>
  );
};

export default BlogPostWidget;
