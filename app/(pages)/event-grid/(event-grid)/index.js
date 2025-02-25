"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import EventHead from "@/components/Events/EventHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import EventGrid from "@/components/Events/Events";

import EventData from "../../../../data/events.json";

const EventGridPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <EventHead />
          <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <EventGrid
                isPagination={true}
                parentClass="event-grid-card"
                childClass="col-lg-4 col-md-6 col-12"
                getEvents={EventData}
              />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default EventGridPage;
