import BackToTop from "@/app/backToTop";
import EventListPage from "./(event-list)";

export const metadata = {
  title: "Event List - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const EventListLayout = () => {
  return (
    <>
      <EventListPage />

      <BackToTop />
    </>
  );
};

export default EventListLayout;
