import React from "react";

const TeamHead = ({ title, desc }) => {
  return (
    <>
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h5 className="title">{title}</h5>
            <p className="description mt--10">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHead;
