import BackToTop from "@/app/backToTop";
import AnnouncementsPage from "./(announcements)";

export const metadata = {
  title:
    "Instructor Announcements - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AnnouncementsLayout = () => {
  return (
    <>
      <AnnouncementsPage />
      <BackToTop />
    </>
  );
};

export default AnnouncementsLayout;
