import BackToTop from "@/app/backToTop";
import EventSiderbarPage from "./(event-sidebar)";

export const metadata = {
  title: "Event Siderbar - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const EventSiderbarLayout = () => {
  return (
    <>
      <EventSiderbarPage />

      <BackToTop />
    </>
  );
};

export default EventSiderbarLayout;
