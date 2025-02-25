import React from "react";

import HeaderTopTwo from "./Header-Top/HeaderTop-Two";
import HeaderTwo from "./Headers/Header-Two";
import { useAppContext } from "@/context/Context";
import DarkSwitch from "./dark-switch";

const HeaderStyleSeven = ({ headerSticky }) => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-7 rbt-transparent-header">
        <div className="rbt-sticky-placeholder"></div>
        <HeaderTopTwo
          gapSpaceBetween="bg-not-transparent bg-gradient-7 color-white"
          container="container"
        />

        <HeaderTwo
          headerSticky={headerSticky}
          transparent="bg-color-white color-white-variation header-sticky rbt-border-bottom-light"
          container="container-fluid"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-end"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
          btnText="Join Now"
        />
      </header>
    </>
  );
};

export default HeaderStyleSeven;
