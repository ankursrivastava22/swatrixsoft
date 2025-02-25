import Image from "next/image";
import Link from "next/link";

import CardData from "../../data/elements/card";

const CardThree = () => {
  return (
    <>
      {CardData &&
        CardData.cardThree.map((data, index) => (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover card-list-2">
              <div className="rbt-card-img">
                <Link href={data.link}>
                  <Image
                    src={data.img}
                    width={231}
                    height={324}
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="rating-count">
                      ({data.rating} Reviews)
                    </span>
                  </div>
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" title="Bookmark" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                <h4 className="rbt-card-title">
                  <Link href={data.link}>{data.title}</Link>
                </h4>

                <ul className="rbt-meta">
                  <li>
                    <i className="feather-book"></i>
                    {data.lesson} Lessons
                  </li>
                  <li>
                    <i className="feather-users"></i>
                    {data.student} Students
                  </li>
                </ul>

                <p className="rbt-card-text">{data.desc}</p>
                <div className="rbt-author-meta mb--10">
                  <div className="rbt-avater">
                    <Link href={data.linkTwo}>
                      <Image
                        src={data.avatar}
                        width={33}
                        height={33}
                        alt="Sophia Jaymes"
                      />
                    </Link>
                  </div>
                  <div className="rbt-author-info">
                    By <Link href={data.linkTwo}>{data.author}</Link> In
                    <Link href="#">{data.post}</Link>
                  </div>
                </div>
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  {data.button ? (
                    <Link className="rbt-btn-link left-icon" href={data.link}>
                      <i className="feather-shopping-cart"></i> Add To Cart
                    </Link>
                  ) : (
                    <Link className="rbt-btn-link" href={data.link}>
                      Learn More<i className="feather-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardThree;
