import BackToTop from "@/app/backToTop";
import AnnouncementsPage from "./(announcements)";

export const metadata = {
  title:
    "Instructor Announcements - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
