import React from "react";
import HeaderSix from "./Headers/Header-Six";
import HeaderTopSeven from "./Header-Top/HeaderTop-Seven";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";

const HeaderStyleEight = () => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-dark-header-8 rbt-header-8 rbt-transparent-header">
        <div className="rbt-sticky-placeholder"></div>
        <HeaderTopSeven
          gapSpaceBetween="header-space-betwween"
          bgColor="bg-color-transparent"
          flexDirection=""
          btnClass="rbt-switch-btn btn-gradient btn-xs"
          btnText="Call us now"
        />

        <HeaderSix
          sticky="header-sticky"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-end"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
          btnText="Join Now"
        />
      </header>
    </>
  );
};

export default HeaderStyleEight;
