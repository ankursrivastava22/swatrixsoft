"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Search from "@/components/Search/Search";
import SearchThree from "@/components/Search/Search-Three";
import SearchTwo from "@/components/Search/Search-Two";
import Cart from "@/components/Header/Offcanvas/Cart";

const SearchPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" /> <Cart />
          <BreadCrumb title="Search" text="Search" />
          <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <Search />
          </div>
          <div className="rbt-elements-area bg-color-extra2 rbt-section-gap">
            <SearchTwo />
          </div>
          <div className="rbt-elements-area bg-color-darker rbt-section-gap">
            <SearchThree />
          </div>
          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SearchPage;
