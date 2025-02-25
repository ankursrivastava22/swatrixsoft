import BackToTop from "@/app/backToTop";
import EventGridPage from "./(event-grid)";

export const metadata = {
  title: "Event Grid - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const EventGridLayout = () => {
  return (
    <>
      <EventGridPage />

      <BackToTop />
    </>
  );
};

export default EventGridLayout;
