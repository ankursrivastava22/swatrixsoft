const BorderRadius = () => {
  return (
    <div
      id="rbtBorderRadius"
      className="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
    >
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Border Radius</h4>
        </div>
        <div className="row g-5">
          <div className="col-lg-3">
            <div className="color-box-inner">
              <div className="color-box bg-color-primary rbt-radius"></div>
              <div className="content mt--10">
                <span className="rbt-title-style-2 text-lowercase">radius</span>
                <h6 className="title mb--0">Radius Default</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="color-box-inner">
              <div className="color-box bg-color-primary radius-4"></div>
              <div className="content mt--10">
                <span className="rbt-title-style-2 text-lowercase">
                  radius-4
                </span>
                <h6 className="title mb--0">Radius 4px</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="color-box-inner">
              <div className="color-box bg-color-primary radius-6"></div>
              <div className="content mt--10">
                <span className="rbt-title-style-2 text-lowercase">
                  radius-6
                </span>
                <h6 className="title mb--0">Radius 6px</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="color-box-inner">
              <div className="color-box bg-color-primary radius-10"></div>
              <div className="content mt--10">
                <span className="rbt-title-style-2 text-lowercase">
                  radius-10
                </span>
                <h6 className="title mb--0">Radius 10px</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="color-box-inner">
              <div className="color-box bg-color-primary radius-round"></div>
              <div className="content mt--10">
                <span className="rbt-title-style-2 text-lowercase">
                  radius-round
                </span>
                <h6 className="title mb--0">Radius Round</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderRadius;
