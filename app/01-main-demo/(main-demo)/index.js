"use client";

import React, { useEffect, useState } from "react";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import Login from "@/components/Login/Login"; // Import your login component

const HomePageLayout = ({ getBlog }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) {
    // Still checking for token; you can optionally show a loading spinner here.
    return null;
  }

  if (!isLoggedIn) {
    // If not logged in, render only the Login component.
    return <Login />;
  }

  // If logged in, render the full layout.
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MainDemo blogs={getBlog} />
        <Cart />
        <Separator />
        <FooterThree />
      </Context>
    </Provider>
  );
};

export default HomePageLayout;
