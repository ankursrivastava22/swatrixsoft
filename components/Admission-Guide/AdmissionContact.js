import Link from "next/link";
import React from "react";

const AdmissionContact = () => {
  return (
    <>
      <div className="row g-5">
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="800"
        >
          <div className="rbt-address text-center">
            <div className="icon">
              <i className="feather-headphones"></i>
            </div>
            <div className="inner">
              <h4 className="title">Call us</h4>
              <p>
                <Link href="tel:+444555666777">+444 555 666 777</Link>
              </p>
              <p>
                <Link href="tel:+222222222333">+222 222 222 333</Link>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay="250"
          data-sal-duration="800"
        >
          <div className="rbt-address text-center">
            <div className="icon">
              <i className="feather-map-pin"></i>
            </div>
            <div className="inner">
              <h4 className="title">Visit us</h4>
              <p>
                5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionContact;
