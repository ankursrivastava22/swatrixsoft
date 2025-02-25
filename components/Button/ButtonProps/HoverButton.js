import Link from "next/link";

const HoverButton = ({
  SwitchX,
  SwitchY,
  MarqueeX,
  MarqueeY,
  switchBtnOne,
  switchBtnTwo,
  marqueeBtnOne,
  marqueeBtnTwo,
  mt,
}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className={`rbt-button-group ${mt ? "mt--30" : ""}`}>
          <Link className={`rbt-btn ${switchBtnOne}`} href="#">
            <span data-text="Switch X">{SwitchX}</span>
          </Link>
          <Link className={`rbt-btn ${switchBtnTwo}`} href="#">
            <span data-text="Switch Y">{SwitchY}</span>
          </Link>
          <Link className={`rbt-btn ${marqueeBtnOne}`} href="#">
            <span data-text="Marquee X">{MarqueeX}</span>
          </Link>
          <Link className={`rbt-btn ${marqueeBtnTwo}`} href="#">
            <span data-text="Marquee Y">{MarqueeY}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HoverButton;
