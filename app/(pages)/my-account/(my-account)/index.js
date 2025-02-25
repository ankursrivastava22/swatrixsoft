"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import AccountSidebar from "@/components/My-Account/AccountSidebar";
import MyAccount from "@/components/My-Account/MyAccount";
import Context from "@/context/Context";
import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

import AccountInfo from "../../../../data/myAccount.json";

const MyAccountPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="My Account" text="My Account" />

          <div className="my-account-section bg-color-white rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row g-5">
                    <div className="col-lg-3 col-12">
                      <AccountSidebar />
                    </div>
                    <div className="col-lg-9 col-12">
                      {AccountInfo &&
                        AccountInfo.account.map((data, index) => (
                          <MyAccount {...data} key={index} account={data} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default MyAccountPage;
