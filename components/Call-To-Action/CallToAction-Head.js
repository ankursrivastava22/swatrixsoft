import React from "react";

const CallToActionHead = ({ tag, title }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-violet-opacity">{tag}</span>
              <h2 className="title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionHead;
