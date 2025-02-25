import BackToTop from "@/app/backToTop";
import EventSiderbarPage from "./(event-sidebar)";

export const metadata = {
  title: "Event Siderbar - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
