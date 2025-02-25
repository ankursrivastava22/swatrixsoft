const Typography = () => {
  return (
    <div
      id="typography"
      className="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
    >
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Typography</h4>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <h1>h1. Heading One</h1>
            <h2>h2. Heading Two</h2>
            <h3>h3. Heading Three</h3>
            <h4>h4. Heading Four</h4>
            <h5>h5. Heading Five</h5>
            <h6>h6. Heading Six</h6>
          </div>
          <div className="col-lg-6">
            <p className="b1">
              B1- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique non ipsam reiciendis.
            </p>
            <p className="b2">
              B2- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique non ipsam reiciendis.
            </p>
            <p className="b3">
              B3- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique non ipsam reiciendis.
            </p>
            <p>
              Befault- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique non ipsam reiciendis.
            </p>
          </div>
        </div>

        <div className="row mt--40">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Heading Style</h4>
          </div>
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Heading Style One.</h2>
            </div>
          </div>
          <div className="col-lg-12 mt--60">
            <div className="section-title text-center">
              <h2 className="rbt-title-style-2">Heading Style Two.</h2>
            </div>
          </div>
          <div className="col-lg-12 mt--60">
            <div className="section-title text-center">
              <h2 className="rbt-title-style-3">Heading Style Three.</h2>
            </div>
          </div>
          <div className="col-lg-12 mt--60">
            <div className="section-title text-center">
              <h2 className="rbt-short-title">Heading Short Title.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
