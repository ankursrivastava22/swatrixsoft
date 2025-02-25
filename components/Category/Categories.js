import CategoryEight from "./CategoryEight";
import CategoryFive from "./CategoryFive";
import CategoryFour from "./CategoryFour";
import CategoryNine from "./CategoryNine";
import CategoryOne from "./CategoryOne";
import CategorySeven from "./CategorySeven";
import CategorySix from "./CategorySix";
import CategoryTen from "./CategoryTen";
import CategoryThree from "./CategoryThree";
import CategoryThreeSlider from "./CategoryThreeSlider";
import CategoryTwo from "./CategoryTwo";

const Categories = () => {
  return (
    <>
      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style One</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryOne />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Two</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryTwo />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Three</h5>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30">
            <CategoryThree />
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h5 className="title">Carousel (Slider)</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <CategoryThreeSlider />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Four</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryFour />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Five</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryFive />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Six</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategorySix />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Seven</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategorySeven />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="title">Style Eight</h5>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <CategoryEight />
          </div>
        </div>
      </div>

      <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h5 className="title">Style Nine</h5>
              </div>
            </div>
          </div>
          <CategoryNine />
        </div>
      </div>

      <div className="rbt-categories-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h5 className="title">Style Ten</h5>
              </div>
            </div>
          </div>
          <CategoryTen />
        </div>
      </div>
    </>
  );
};

export default Categories;
