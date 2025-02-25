import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProduct = ({ relatedProduct }) => {
  return (
    <>
      {relatedProduct &&
        relatedProduct.map((data, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="rbt-default-card style-three rbt-hover">
              <div className="inner">
                <div className="content pt--0 pb--10">
                  <h2 className="title">
                    <Link href={`/single-product/${data.id}`}>
                      {data.title}
                    </Link>
                  </h2>

                  <span className="team-form">
                    <span className="location">By {data.productBy}</span>
                  </span>
                </div>
                <div className="thumbnail">
                  <Link href={`/single-product/${data.id}`}>
                    <Image
                      src={data.courseImg}
                      width={355}
                      height={426}
                      alt="Histudy Book Image"
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="rbt-review justify-content-center">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="rating-count">
                      ({data.rating}) - 100% Positive Reviews
                    </span>
                  </div>
                  <div className="rbt-price justify-content-center mt--10">
                    <span className="current-price theme-gradient">
                      ${data.price}.00
                    </span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  <div className="addto-cart-btn mt--20">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Add To Cart</span>
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
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default RelatedProduct;
