import BackToTop from "@/app/backToTop";
import AcademyGallery from "./(academy-gallery)";

export const metadata = {
  title: "Academy Gallery - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AcademyGalleryLayout = () => {
  return (
    <>
      <AcademyGallery />

      <BackToTop />
    </>
  );
};

export default AcademyGalleryLayout;
