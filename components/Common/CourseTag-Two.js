import Link from "next/link";
import React from "react";

const CourseTagTwo = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-12 col-xl-12">
          <div className="rbt-categori-leftbar">
            <div className="rbt-categori-list">
              <Link className="blank" href="#"></Link>
              <Link href="#">Healthcare</Link>
              <Link href="#">Beauty & fashion</Link>
              <Link href="#">Education & Travel</Link>
              <Link className="blank" href="#"></Link>
            </div>
            <div className="rbt-categori-list">
              <Link className="blank" href="#"></Link>
              <Link href="#">Kitchen</Link>
              <Link href="#">Medicle & entertain</Link>
              <Link href="#">Medicle & Science</Link>
              <Link href="#">Tour & Travel</Link>
              <Link className="blank" href="#"></Link>
            </div>
            <div className="rbt-categori-list">
              <Link className="blank" href="#"></Link>
              <Link href="#">Kitchen</Link>
              <Link href="#">Featured</Link>
              <Link href="#">Popular</Link>
              <Link href="#">Latest</Link>
              <Link className="blank" href="#"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTagTwo;
