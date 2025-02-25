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
import EventSidebar from "@/components/Events/EventSidebar";

import EventData from "../../../../data/events.json";

const EventSiderbarPage = () => {
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
              <div className="row row--30 gy-5">
                <div className="col-lg-4 col-xl-3 order-2 order-lg-1">
                  <EventSidebar />
                </div>
                <div className="col-lg-8 col-xl-9 order-1 order-lg-2">
                  <EventGrid
                    isPagination={true}
                    parentClass="event-grid-card"
                    childClass="col-xl-4 col-lg-6 col-md-6 col-12"
                    getEvents={EventData}
                  />
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

export default EventSiderbarPage;
