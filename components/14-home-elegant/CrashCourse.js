import Image from "next/image";
import Link from "next/link";

import CardSix from "../Cards/Card-Six";

const CrashCourse = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb--60">
            <h2 className="title">Special Crash Course.</h2>
            <p className="description mt--30">
              Far far away, behind the word mountains, far from the countries
              Vokalia and <br /> Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="row g-5">
            <CardSix
              parentClass="col-lg-6 col-xl-4 col-md-6 col-12"
              childClass="rbt-card variation-01 rbt-hover elegant-course"
              types="special"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrashCourse;
