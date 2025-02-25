import { useAppContext } from "@/context/Context";
import HeaderTopFour from "./Header-Top/HeaderTop-Four";
import HeaderFour from "./Headers/Header-Four";
import DarkSwitch from "./dark-switch";

const HeaderStyleFour = () => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-4">
        <div className="rbt-sticky-placeholder"></div>
        <HeaderTopFour
          bgColor="bg-color-white border-top-bar-primary-color rbt-border-bottom"
          gapSpaceBetween="header-space-betwween"
          container="container-fluid"
          flexDirection=""
          btnClass="rbt-switch-btn btn-gradient btn-xs"
          btnText="Call us now"
        />

        <HeaderFour
          sticky="bg-color-white header-sticky"
          gapSpaceBetween="header-space-betwween"
          container="container-fluid"
          navigationEnd="rbt-navigation-start"
          btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
          btnText="Enroll Now"
        />
      </header>
    </>
  );
};

export default HeaderStyleFour;
