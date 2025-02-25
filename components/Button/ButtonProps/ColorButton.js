import Link from "next/link";
import React from "react";

const SingleButton = ({
  btnText,
  classOne,
  btnClassOne,
  btnClassTwo,
  btnClassThree,
  btnClassFour,
  btnClassFive,
  btnClassSix,
  lastbtn,head
}) => {
  return (
    <>
      <div className={classOne}>
        <div className="container">
          {head}
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className={`rbt-btn ${btnClassOne}`} href="#">
                  {btnText}
                </Link>
                <Link className={`rbt-btn ${btnClassTwo}`} href="#">
                  {btnText}
                </Link>
                <Link className={`rbt-btn ${btnClassThree}`} href="#">
                  {btnText}
                </Link>
                <Link className={`rbt-btn ${btnClassFour}`} href="#">
                  {btnText}
                </Link>
                <Link className={`rbt-btn ${btnClassFive}`} href="#">
                  {btnText}
                </Link>
                {lastbtn ? (
                  <Link className={`rbt-btn ${btnClassSix}`} href="#">
                    {btnText}
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleButton;
