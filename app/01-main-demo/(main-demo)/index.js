// homepagelayout.js
"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import Login from "@/components/Login/Login";
import { useAuth } from "@/context/AuthContext";

const HomePageLayout = ({ getBlog }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to /login for any route except "/" and "/login" when unauthenticated
    if (
      !isLoading &&
      !isAuthenticated &&
      pathname !== "/login" &&
      pathname !== "/"
    ) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  // Show a loading spinner while auth status is being determined
  if (isLoading) {
    return (
      <div className="rbt-splash-loading">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  // Block rendering of protected pages until authenticated
  if (
    !isAuthenticated &&
    pathname !== "/login" &&
    pathname !== "/"
  ) {
    return null;
  }

  // Show the Login component on /login
  if (pathname === "/login") {
    return <Login />;
  }

  // Public home page ("/") and all authenticated pages
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MainDemo blogs={getBlog} />
        <Cart />
        <Separator />
        {/* <FooterThree /> */}
      </Context>
    </Provider>
  );
};

export default HomePageLayout;
