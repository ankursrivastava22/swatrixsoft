"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import HireTeam from "@/components/Hireteam/Hireteam";

const HireTeamPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        {/* Contact Form */}
        <HireTeam />
        {/* Footer */}
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default HireTeamPage;