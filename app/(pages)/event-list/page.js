import BackToTop from "@/app/backToTop";
import EventListPage from "./(event-list)";

export const metadata = {
  title: "Event List - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
