import { useAppContext } from "@/context/Context";
import HeaderTopMidThree from "./Header-Top/HeaderTopMid-Three";
import HeaderSeven from "./Headers/Header-Seven";
import DarkSwitch from "./dark-switch";

const HeaderStyleNine = () => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-9">
        <div className="rbt-sticky-placeholder"></div>

        <div className="rbt-header-middle position-relative rbt-header-mid-1 bg-color-white rbt-border-bottom">
          <HeaderTopMidThree flexDirection="" />
        </div>

        <HeaderSeven
          transparent="header-not-transparent header-sticky"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-end"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
          btnText="Join Now"
        />
      </header>
    </>
  );
};

export default HeaderStyleNine;
